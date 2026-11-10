// Project content for the home page decks, ported from the Home A3 design.

export type Img = { src: string; alt: string; width: number; height: number };
export type Item = { n?: string; big: string; label: string };

type Base = { cap: string; capText: string };
export type Slide = Base &
  (
    | { kind: "text"; eyebrow: string; title: string; text: string }
    | { kind: "phone"; imgs: Img[] }
    | { kind: "web"; img: Img }
    | { kind: "sheet"; img: Img; sheetCls: "a4" | "wide" }
    | { kind: "stats"; eyebrow: string; items: Item[] }
    | { kind: "steps"; eyebrow: string; title: string; small?: boolean; items: Item[] }
  );

export type ProjectKey = "mt" | "rb" | "cy";
export type Project = { key: ProjectKey; slug: string; title: string; blurb: string; slides: Slide[] };

export const projects: Project[] = [
  {
    "key": "mt",
    "slug": "mission-tracker",
    "title": "Mission Tracker",
    "blurb": "An app for following SpaceX missions that teaches rocketry as you watch: live countdowns, a glossary from countdown to orbit, and hands-on ways to learn by flying a launch timeline or taking a Falcon 9 apart.",
    "slides": [
      {
        "kind": "text",
        "eyebrow": "The gap",
        "title": "Launch apps win on data, not on feeling.",
        "text": "The trackers cover every provider and do it well. None of them made me want to open them.",
        "cap": "The gap.",
        "capText": "Why build another launch app."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/41ac60791fd353b2ba9710b6158acd40.png",
            "alt": "Missions screen with live countdowns",
            "width": 1170,
            "height": 2532
          },
          {
            "src": "/work/fab4a6483f8c7e835b869a0d59a21215.png",
            "alt": "Mission detail for a cargo Dragon in orbit",
            "width": 1170,
            "height": 2532
          }
        ],
        "cap": "Track.",
        "capText": "Missions in orbit up top with a running clock; upcoming ones count down below."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/11d29ede3d9cbdc48c2686c78d8d716d.png",
            "alt": "Upcoming Starlink mission with a live countdown",
            "width": 1170,
            "height": 2532
          }
        ],
        "cap": "Upcoming.",
        "capText": "A live countdown to the launch window, and the webcast one tap away."
      },
      {
        "kind": "steps",
        "eyebrow": "What it’s for",
        "title": "Four goals, set before any design",
        "items": [
          {
            "n": "01",
            "big": "Track",
            "label": "Never miss a launch."
          },
          {
            "n": "02",
            "big": "Learn",
            "label": "Understand what’s happening, and why."
          },
          {
            "n": "03",
            "big": "Engage",
            "label": "Build a relationship with launches."
          },
          {
            "n": "04",
            "big": "Dogfood",
            "label": "Usable daily on my own iPhone."
          }
        ],
        "cap": "The goals.",
        "capText": "Set before any design work began."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/482ad1cf34628e3bf8db6969174a9ad5.png",
            "alt": "Learn tab",
            "width": 1170,
            "height": 2532
          },
          {
            "src": "/work/45c65dbaee70b65b4d1308ee5873eda4.png",
            "alt": "Falcon 9 term page",
            "width": 1170,
            "height": 2532
          }
        ],
        "cap": "Learn.",
        "capText": "Every term from countdown to orbit, each with its own drawing."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/54a159d07f458ad6c4e5ee9264747edd.png",
            "alt": "Fly the timeline interactive",
            "width": 1170,
            "height": 2532
          }
        ],
        "cap": "Fly the timeline.",
        "capText": "Scrub through a real launch; the drawing follows along."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/32139d46f6d01ed4991dbf91fe357d5f.png",
            "alt": "Exploded Falcon 9 with numbered parts",
            "width": 1170,
            "height": 2532
          },
          {
            "src": "/work/bc2440576adb1c64a3e9a936a3e0573b.png",
            "alt": "Put the events of a flight phase in order",
            "width": 1170,
            "height": 2532
          }
        ],
        "cap": "Learn by doing.",
        "capText": "Take a Falcon 9 apart, then put a flight’s events in order."
      },
      {
        "kind": "text",
        "eyebrow": "Decision 03",
        "title": "Missions, not launches.",
        "text": "A launch is an event; a mission carries on into orbit, docking and landing. The cost: a less familiar word to learn.",
        "cap": "A decision.",
        "capText": "Naming the thing the app follows."
      },
      {
        "kind": "stats",
        "eyebrow": "In numbers",
        "items": [
          {
            "big": "39",
            "label": "terms, each with its own drawing"
          },
          {
            "big": "3",
            "label": "interactives, shipped in three phases"
          },
          {
            "big": "15",
            "label": "requests an hour from the launch feed, so it’s cached and never called from the app"
          }
        ],
        "cap": "In numbers.",
        "capText": "What the web build holds today."
      }
    ]
  },
  {
    "key": "rb",
    "slug": "robot-parts",
    "title": "Robot parts and 4am shifts",
    "blurb": "A parts inventory and a plan to cut early shifts for a London robotics start-up. Researched, designed and written in a week for a job application.",
    "slides": [
      {
        "kind": "text",
        "eyebrow": "The frame",
        "title": "One 4am stop connects both questions.",
        "text": "Where the parts are, and how often someone has to be in a store at 4am, are two sides of the same moment.",
        "cap": "The frame.",
        "capText": "Two questions from the job advert, treated as one."
      },
      {
        "kind": "web",
        "cap": "What’s on each robot.",
        "capText": "Every slot, the serial fitted and when it went in.",
        "img": {
          "src": "/work/b07a4e5477e669d6587c6497a3c5200b.jpg",
          "alt": "Robot detail showing each slot with the serial fitted",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "web",
        "cap": "A swap in two taps.",
        "capText": "The robot, van kit and repair loop update together.",
        "img": {
          "src": "/work/1e7b990fa91b044a0afecf37fd094c22.jpg",
          "alt": "Swap panel listing the nearest serviceable units",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "steps",
        "eyebrow": "Decisions",
        "title": "Six calls, each with a cost",
        "small": true,
        "items": [
          {
            "n": "01",
            "big": "A spreadsheet before software",
            "label": "Cost: a month of scanning discipline."
          },
          {
            "n": "02",
            "big": "Serials only where they matter",
            "label": "Cost: the split is a first guess."
          },
          {
            "n": "03",
            "big": "The robot is a location",
            "label": "Cost: more modelling up front."
          },
          {
            "n": "04",
            "big": "Earn fewer 4am shifts",
            "label": "Cost: slower than dropping shifts."
          }
        ],
        "cap": "The decisions.",
        "capText": "The costs are the part worth talking through."
      },
      {
        "kind": "web",
        "cap": "Every part in one list.",
        "capText": "What’s on the shelf, in each van and in every store kit.",
        "img": {
          "src": "/work/0cbc43ccaa6705a6a748bec953f60d74.jpg",
          "alt": "Parts list grouped by category with stock across locations",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "web",
        "cap": "Site readiness.",
        "capText": "Each store climbs from staffed to unattended against agreed criteria.",
        "img": {
          "src": "/work/2edb3e2d6705341f2bd123d23aa2d5b3.jpg",
          "alt": "Site readiness for each store",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "web",
        "cap": "A designed rota.",
        "capText": "Shared fairly, with rest rules it won’t break.",
        "img": {
          "src": "/work/465bb63d909eb64480ac24e0acb5105e.jpg",
          "alt": "Early-shift rota for the week",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "web",
        "cap": "An overnight handover.",
        "capText": "Drafted from robot logs, so nobody re-discovers the night.",
        "img": {
          "src": "/work/07aebda6a6c3d2f4612814dc13bdcdcb.jpg",
          "alt": "Overnight handover drafted from robot logs",
          "width": 2160,
          "height": 1350
        }
      },
      {
        "kind": "text",
        "eyebrow": "How I’d know it works",
        "title": "One measure, one guardrail.",
        "text": "Early on-site shifts per site per week should fall, while the time to get a robot running again must not rise.",
        "cap": "The measure.",
        "capText": "And the line it mustn’t cross."
      }
    ]
  },
  {
    "key": "cy",
    "slug": "carry",
    "title": "Carry and distribution engine",
    "blurb": "How I'd take carry and payouts out of a spreadsheet at Odin, a London SPV platform. A paper, a tested calculation and a clickable demo, made for a job application.",
    "slides": [
      {
        "kind": "sheet",
        "sheetCls": "a4",
        "cap": "The paper.",
        "capText": "Carry at Odin, from the spice merchants to my first 90 days.",
        "img": {
          "src": "/work/b094568a27234da371878429497f24cf.png",
          "alt": "Cover of the paper, Counting the spice",
          "width": 794,
          "height": 1122
        }
      },
      {
        "kind": "steps",
        "eyebrow": "Carry, worked by hand",
        "title": "Four friends, one exit",
        "items": [
          {
            "n": "1 · In",
            "big": "£10,000",
            "label": "Four friends’ stake is sold."
          },
          {
            "n": "2 · Back first",
            "big": "£4,000",
            "label": "Each gets their £1,000 back."
          },
          {
            "n": "3 · Carry",
            "big": "£1,200",
            "label": "20% of the £6,000 profit, to Lena."
          },
          {
            "n": "4 · The rest",
            "big": "£4,800",
            "label": "Split four ways, £1,200 each."
          }
        ],
        "cap": "Learning it first.",
        "capText": "One small exit, worked by hand to get the order right."
      },
      {
        "kind": "web",
        "cap": "Today.",
        "capText": "Which exits are waiting on Tom, and the one thing to do on each.",
        "img": {
          "src": "/work/4c5fd19c3f7fdeccfd31070dd8417a66.png",
          "alt": "Today: the exits waiting on Deal Operations",
          "width": 1440,
          "height": 900
        }
      },
      {
        "kind": "web",
        "cap": "Log an exit.",
        "capText": "Odin reads the amount and dates, each with the page it came from.",
        "img": {
          "src": "/work/be964eb2d3f50dafa08ab518cdd94378.png",
          "alt": "Log an exit: Odin reads the sale documents",
          "width": 1440,
          "height": 900
        }
      },
      {
        "kind": "web",
        "cap": "Settle the terms.",
        "capText": "Profit is defined twice. Odin won’t pick; a person does.",
        "img": {
          "src": "/work/24e04272072845447c3ab2cab14011d1.png",
          "alt": "Settle the terms: two clauses define profit differently",
          "width": 1440,
          "height": 900
        }
      },
      {
        "kind": "web",
        "cap": "Exit calculation.",
        "capText": "Where every pound goes, adding up to the penny.",
        "img": {
          "src": "/work/50416ad53ecf58ba61ce8b2901d09eae.png",
          "alt": "Exit calculation: where every pound goes",
          "width": 1440,
          "height": 900
        }
      },
      {
        "kind": "sheet",
        "sheetCls": "wide",
        "cap": "The approach.",
        "capText": "AI reads, code calculates, people approve.",
        "img": {
          "src": "/work/6d6d3db53b86751f6f3edacbf81b7c40.png",
          "alt": "Diagram: AI reads, code calculates, people approve",
          "width": 1440,
          "height": 820
        }
      },
      {
        "kind": "web",
        "cap": "Finance review.",
        "capText": "Leah checks the calls a person made, not the arithmetic.",
        "img": {
          "src": "/work/ad40b46e9e914f9ef8c2089ef8c92a14.png",
          "alt": "Finance review of judgement calls and unusual investors",
          "width": 1440,
          "height": 900
        }
      },
      {
        "kind": "stats",
        "eyebrow": "Proof",
        "items": [
          {
            "big": "197",
            "label": "tests, with results checked to the penny"
          },
          {
            "big": "68%",
            "label": "of clauses read right by a careless model; 32% confidently wrong"
          },
          {
            "big": "0 of 3",
            "label": "ambiguous clauses it flagged. The bar is all of them."
          }
        ],
        "cap": "Tested first.",
        "capText": "The careless reader is the useful result."
      },
      {
        "kind": "web",
        "cap": "Exited Investment Letter.",
        "capText": "What an investor sees: his number first, then how it was reached.",
        "img": {
          "src": "/work/522b2b8f1dc5991947f97714e462c7ec.png",
          "alt": "Exited Investment Letter for an investor",
          "width": 1440,
          "height": 900
        }
      }
    ]
  }
];
