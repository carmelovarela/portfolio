import Image from "next/image";
import type { Img, ProjectKey, Slide } from "@/content/projects";

const SIZES = {
  phone: "(max-width: 760px) 44vw, 300px",
  web: "(max-width: 760px) 130vw, 960px",
  a4: "(max-width: 760px) 74vw, 460px",
  wide: "(max-width: 760px) 130vw, 980px",
  wall: "(max-width: 760px) 31vw, 350px",
};

// The paper as a straight 5 x 5 wall of pages with the cover in the middle cell.
// From the cover on, pages follow the paper's order (left to right, row by row); the cells
// before it count back from the last page, so the whole wall reads as one loop.
// The grid is bigger than the tile so it fills it at both desktop and phone shapes.
const WALL_CELLS = 25;
const WALL_MIDDLE = 12;

function wallCells(imgs: Img[]) {
  const [cover, ...rest] = imgs;
  const n = rest.length;
  return Array.from({ length: WALL_CELLS }, (_, i) => {
    if (i === WALL_MIDDLE) return cover;
    const k = i > WALL_MIDDLE ? i - WALL_MIDDLE - 1 : n - (WALL_MIDDLE - i);
    return rest[((k % n) + n) % n];
  });
}

function tileClass(k: ProjectKey, s: Slide) {
  const cls = ["tile", `t-${k}`, `k-${s.kind}`];
  if (s.kind === "phone" && s.imgs.length === 2) cls.push("two");
  return cls.join(" ");
}

export function SlideTile({ project, slide: s }: { project: ProjectKey; slide: Slide }) {
  return (
    <div className="fr">
      <div className={tileClass(project, s)}>
        {s.kind === "phone" && (
          <div className="ph-row">
            {s.imgs.map((m) => (
              <div className="phone" key={m.src}>
                <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes={SIZES.phone} />
              </div>
            ))}
          </div>
        )}
        {s.kind === "web" && (
          <div className="web">
            <Image src={s.img.src} alt={s.img.alt} width={s.img.width} height={s.img.height} sizes={SIZES.web} />
          </div>
        )}
        {s.kind === "sheet" && (
          <div className={`sheet ${s.sheetCls}`}>
            <Image src={s.img.src} alt={s.img.alt} width={s.img.width} height={s.img.height} sizes={SIZES[s.sheetCls]} />
          </div>
        )}
        {s.kind === "wall" && (
          <div className="wall">
            {wallCells(s.imgs).map((m, i) => (
              <Image
                key={i}
                src={m.src}
                alt={i === WALL_MIDDLE ? m.alt : ""}
                width={m.width}
                height={m.height}
                sizes={SIZES.wall}
              />
            ))}
          </div>
        )}
        {s.kind === "text" && (
          <div className="tx">
            <span className="eb">{s.eyebrow}</span>
            <p className="st">{s.title}</p>
            <p className="sub">{s.text}</p>
          </div>
        )}
        {s.kind === "stats" && (
          <div className="tx sp">
            <span className="eb">{s.eyebrow}</span>
            <div className="stats">
              {s.items.map((t) => (
                <div key={t.big}>
                  <b>{t.big}</b>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {s.kind === "steps" && (
          <div className="tx sp">
            <span className="eb">{s.eyebrow}</span>
            <div className="stepw">
              <p className="st sm">{s.title}</p>
              <div className={s.small ? "steps sm" : "steps"}>
                {s.items.map((t) => (
                  <div key={t.n}>
                    <small>{t.n}</small>
                    <b>{t.big}</b>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
