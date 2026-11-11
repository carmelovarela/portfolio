This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mission Tracker screenshots

The phone shots in `public/work/mt-*.png` come from the iOS app in `../mission-tracker`, captured on a dedicated "iPhone 18 Pro (portfolio)" simulator and framed in the Simulator's own device frame.

```bash
# Build and install the app on the portfolio simulator
xcrun simctl boot "iPhone 18 Pro (portfolio)" 2>/dev/null
xcodebuild -project ../mission-tracker/mission-tracker.xcodeproj -scheme mission-tracker -destination 'platform=iOS Simulator,name=iPhone 18 Pro (portfolio)' -derivedDataPath /tmp/mt-dd build
xcrun simctl install "iPhone 18 Pro (portfolio)" /tmp/mt-dd/Build/Products/Debug-iphonesimulator/mission-tracker.app

# Clean status bar, fixed test data and clock
xcrun simctl status_bar "iPhone 18 Pro (portfolio)" override --time "9:41" --dataNetwork wifi --wifiBars 3 --cellularBars 4 --batteryState charged --batteryLevel 100
xcrun simctl launch "iPhone 18 Pro (portfolio)" com.missiontracker.app -useFixture YES -fixedNow 2026-11-10T14:05:00Z

# Open each screen, then capture it (names match public/work)
xcrun simctl io "iPhone 18 Pro (portfolio)" screenshot raw/mt-missions.png

# Frame every capture straight into public/work
swift scripts/frame-iphone.swift public/work raw/mt-*.png
```

Screens: `mt-missions`, `mt-dragon-detail`, `mt-upcoming`, `mt-learn`, `mt-term`, `mt-timeline`, `mt-apart`, `mt-order`.
