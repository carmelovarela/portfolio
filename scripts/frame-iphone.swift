// Puts iPhone 18 Pro simulator screenshots (1206x2622) inside the Simulator's own device frame.
// The frame, screen shape and buttons are read from Xcode's device artwork on this Mac.
//
// Usage: swift scripts/frame-iphone.swift <out-dir> <screenshot.png>...
// Each output keeps the screenshot's file name and is 1368x2724 with transparent corners.

import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

let chrome = "/Library/Developer/DeviceKit/Chrome/phone11.devicechrome/Contents/Resources/"
let device = "/Library/Developer/CoreSimulator/Profiles/DeviceTypes/iPhone 18 Pro.simdevicetype/Contents/Resources/"
let k: CGFloat = 3  // pixels per point
let pad: CGFloat = 10  // room either side for the buttons, in points
let frameW: CGFloat = 436, frameH: CGFloat = 908, inset: CGFloat = 17
let screenW: CGFloat = 402, screenH: CGFloat = 874
let W = frameW + pad * 2, H = frameH
let srgb = CGColorSpace(name: CGColorSpace.sRGB)!

func pdf(_ path: String) -> CGPDFPage {
  guard let doc = CGPDFDocument(URL(fileURLWithPath: path) as CFURL), let page = doc.page(at: 1) else {
    fatalError("Missing device artwork: \(path). Is Xcode with the iOS 27 simulator installed?")
  }
  return page
}

func png(_ path: String) -> CGImage {
  guard let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: path) as CFURL, nil),
    let img = CGImageSourceCreateImageAtIndex(src, 0, nil)
  else { fatalError("Can't read \(path)") }
  return img
}

// Draws a PDF page with its top-left at (x, y) points, y measured from the top.
func draw(_ page: CGPDFPage, _ x: CGFloat, _ y: CGFloat, in ctx: CGContext) {
  let b = page.getBoxRect(.mediaBox)
  ctx.saveGState()
  ctx.translateBy(x: x * k, y: (H - y - b.height) * k)
  ctx.scaleBy(x: k, y: k)
  ctx.translateBy(x: -b.minX, y: -b.minY)
  ctx.drawPDFPage(page)
  ctx.restoreGState()
}

// The display's rounded shape, rendered from the simulator's framebuffer mask.
func screenMask() -> CGImage {
  let id = (NSDictionary(contentsOfFile: device + "profile.plist")?["framebufferMask"] as? String) ?? ""
  let page = pdf(device + id + ".pdf")
  let b = page.getBoxRect(.mediaBox)
  let w = Int(screenW * k), h = Int(screenH * k)
  // Draw the shape's coverage into an alpha-only bitmap, then reuse those bytes as a grey mask (white shows).
  let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w,
                      space: nil, bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.alphaOnly.rawValue))!
  ctx.scaleBy(x: CGFloat(w) / b.width, y: CGFloat(h) / b.height)
  ctx.translateBy(x: -b.minX, y: -b.minY)
  ctx.drawPDFPage(page)
  let bytes = Data(bytes: ctx.data!, count: w * h)
  return CGImage(width: w, height: h, bitsPerComponent: 8, bitsPerPixel: 8, bytesPerRow: w,
                 space: CGColorSpaceCreateDeviceGray(), bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue),
                 provider: CGDataProvider(data: bytes as CFData)!, decode: nil, shouldInterpolate: true, intent: .defaultIntent)!
}

let args = Array(CommandLine.arguments.dropFirst())
guard args.count >= 2 else { fatalError("Usage: swift scripts/frame-iphone.swift <out-dir> <screenshot.png>...") }
let outDir = URL(fileURLWithPath: args[0])
try? FileManager.default.createDirectory(at: outDir, withIntermediateDirectories: true)

let mask = screenMask()
let body = pdf(chrome + "PhoneComposite.pdf")
let vol = pdf(chrome + "Vol BTN.pdf"), action = pdf(chrome + "Mute BTN.pdf"), power = pdf(chrome + "X_Power BTN.pdf")
let bw = vol.getBoxRect(.mediaBox).width

for path in args.dropFirst() {
  let shot = png(path)
  guard shot.width == Int(screenW * k), shot.height == Int(screenH * k) else {
    print("Skipping \(path): \(shot.width)x\(shot.height), expected 1206x2622 (iPhone 18 Pro)")
    continue
  }
  let ctx = CGContext(data: nil, width: Int(W * k), height: Int(H * k), bitsPerComponent: 8, bytesPerRow: 0,
                      space: srgb, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
  ctx.interpolationQuality = .high

  // Side buttons sit behind the body and poke out of its edges (offsets from chrome.json).
  draw(action, pad + 8 - bw, 160, in: ctx)
  draw(vol, pad + 8 - bw, 221, in: ctx)
  draw(vol, pad + 8 - bw, 300, in: ctx)
  draw(power, pad + frameW - 8, 262, in: ctx)
  draw(body, pad, 0, in: ctx)

  let screen = CGRect(x: (pad + inset) * k, y: inset * k, width: screenW * k, height: screenH * k)
  ctx.saveGState()
  ctx.clip(to: screen, mask: mask)
  ctx.draw(shot, in: screen)
  ctx.restoreGState()

  // Dynamic Island, drawn the way the Simulator shows it.
  let island = CGRect(x: (pad + inset + (screenW - 125) / 2) * k, y: (H - inset - 11 - 37) * k, width: 125 * k, height: 37 * k)
  ctx.setFillColor(CGColor(red: 0, green: 0, blue: 0, alpha: 1))
  ctx.addPath(CGPath(roundedRect: island, cornerWidth: 18.5 * k, cornerHeight: 18.5 * k, transform: nil))
  ctx.fillPath()

  let out = outDir.appendingPathComponent(URL(fileURLWithPath: path).lastPathComponent)
  let dest = CGImageDestinationCreateWithURL(out as CFURL, UTType.png.identifier as CFString, 1, nil)!
  CGImageDestinationAddImage(dest, ctx.makeImage()!, nil)
  CGImageDestinationFinalize(dest)
  print("Framed \(out.path)")
}
