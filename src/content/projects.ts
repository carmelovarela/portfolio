// Project content for the home page decks, ported from the Home A3 refined design.

export type Img = { src: string; alt: string; width: number; height: number };
export type Item = { n?: string; big: string; label: string };

type Base = { cap: string; capText: string };
export type Slide = Base &
  (
    | { kind: "text"; eyebrow: string; title: string; text: string }
    | { kind: "phone"; imgs: Img[] }
    | { kind: "web"; img: Img }
    | { kind: "sheet"; img: Img; sheetCls: "a4" | "wide" }
    // A tilted wall of pages; the first image is the cover, shown in the middle.
    | { kind: "wall"; imgs: Img[] }
    | { kind: "stats"; eyebrow: string; items: Item[] }
    | { kind: "steps"; eyebrow: string; title: string; small?: boolean; items: Item[] }
  );

export type ProjectKey = "mt" | "rb" | "cy" | "hz";
export type Project = { key: ProjectKey; slug: string; title: string; blurb: string; slides: Slide[] };

export const projects: Project[] = [
  {
    "key": "mt",
    "slug": "mission-tracker",
    "title": "Mission Tracker",
    "blurb": "Follow SpaceX missions, and learn rocketry as you watch.",
    "slides": [
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/mt-missions.png",
            "alt": "Missions screen with live countdowns",
            "width": 1368,
            "height": 2724
          },
          {
            "src": "/work/mt-dragon-detail.png",
            "alt": "Mission detail for a cargo Dragon in orbit",
            "width": 1368,
            "height": 2724
          }
        ],
        "cap": "Track.",
        "capText": "Missions in orbit up top with a running clock; upcoming ones count down below."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/mt-upcoming.png",
            "alt": "Upcoming Starship flight with a live countdown",
            "width": 1368,
            "height": 2724
          }
        ],
        "cap": "Upcoming.",
        "capText": "A live countdown to the launch window, and the webcast one tap away."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/mt-learn.png",
            "alt": "Learn tab",
            "width": 1368,
            "height": 2724
          },
          {
            "src": "/work/mt-term.png",
            "alt": "Go/no-go poll term page",
            "width": 1368,
            "height": 2724
          }
        ],
        "cap": "Learn.",
        "capText": "Every term from countdown to orbit, each with its own drawing."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/mt-timeline.png",
            "alt": "Fly the timeline interactive at liftoff",
            "width": 1368,
            "height": 2724
          }
        ],
        "cap": "Fly the timeline.",
        "capText": "Scrub through a real launch; the drawing follows along."
      },
      {
        "kind": "phone",
        "imgs": [
          {
            "src": "/work/mt-apart.png",
            "alt": "Exploded Falcon 9 with numbered parts",
            "width": 1368,
            "height": 2724
          },
          {
            "src": "/work/mt-order.png",
            "alt": "Put the events of the ascent in launch order",
            "width": 1368,
            "height": 2724
          }
        ],
        "cap": "Learn by doing.",
        "capText": "Take a Falcon 9 apart, then put a flight’s events in order."
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
    "blurb": "A parts inventory and a plan to cut 4am shifts for a London robotics start-up.",
    "slides": [
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
    "blurb": "Taking carry and payouts out of a spreadsheet at Odin, a London SPV platform.",
    "slides": [
      {
        "kind": "wall",
        "cap": "The paper.",
        "capText": "Carry at Odin, from the spice merchants to my first 90 days.",
        "imgs": [
          {
            "src": "/work/cy-page-01.jpg",
            "alt": "Cover of the paper, Counting the spice",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-03.jpg",
            "alt": "A deal older than any fund",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-04.jpg",
            "alt": "Lena and four friends",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-05.jpg",
            "alt": "A relay with thirteen hand-offs",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-06.jpg",
            "alt": "Real deals are never this tidy",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-07.jpg",
            "alt": "Read, calculate, approve",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-08.jpg",
            "alt": "Prove it before it touches money",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-09.jpg",
            "alt": "The first 90 days",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-15.jpg",
            "alt": "Today, end to end",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-16.jpg",
            "alt": "Where Odin’s own pages disagree",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-18.jpg",
            "alt": "Who needs what, at each step of an exit",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-19.jpg",
            "alt": "AI reads, code calculates, people approve",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-22.jpg",
            "alt": "Today screen",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-24.jpg",
            "alt": "Exit detail screen",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-25.jpg",
            "alt": "Cash in screen",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-26.jpg",
            "alt": "Settle the terms screen",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-27.jpg",
            "alt": "Exit calculation screen",
            "width": 774,
            "height": 1094
          },
          {
            "src": "/work/cy-page-29.jpg",
            "alt": "Syndicate lead approval screen",
            "width": 774,
            "height": 1094
          }
        ]
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
        "kind": "web",
        "cap": "Exited Investment Letter.",
        "capText": "What an investor sees: his number first, then how it was reached.",
        "img": {
          "src": "/work/522b2b8f1dc5991947f97714e462c7ec.png",
          "alt": "Exited Investment Letter for an investor",
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
      }
    ]
  },
  {
    "key": "hz",
    "slug": "horizon",
    "title": "Horizon",
    "blurb": "Turning what clients say on calls into work engineering can pick up, at Neudata.",
    "slides": [
      {
        "kind": "web",
        "cap": "The workflow.",
        "capText": "A meeting link in, the call fetched from Granola, Claude reads it, and draft tickets come out.",
        "img": {
          "src": "/work/hz-workflow.jpg",
          "alt": "Extract product feedback workflow: URL input, fetch meeting, analyse transcript, output",
          "width": 2880,
          "height": 1800
        }
      },
      {
        "kind": "web",
        "cap": "Drafts with evidence.",
        "capText": "Every ticket quotes the person who raised it, then the problem, proposal and criteria.",
        "img": {
          "src": "/work/hz-drafts.jpg",
          "alt": "One meeting's draft tickets with one ticket open",
          "width": 2880,
          "height": 1864
        }
      },
      {
        "kind": "web",
        "cap": "Every call, logged.",
        "capText": "One row per meeting, so the same call is never extracted twice.",
        "img": {
          "src": "/work/hz-extractions.jpg",
          "alt": "Extractions list, one row per meeting",
          "width": 2880,
          "height": 1800
        }
      },
      {
        "kind": "web",
        "cap": "Send to GitLab.",
        "capText": "A person picks the good drafts and a milestone, then pushes them in one go.",
        "img": {
          "src": "/work/hz-push.jpg",
          "alt": "Push to GitLab dialog with a milestone picker",
          "width": 2880,
          "height": 1800
        }
      },
      {
        "kind": "web",
        "cap": "Plans down to milestones.",
        "capText": "Quarters hold initiatives, initiatives hold projects, projects link to milestones.",
        "img": {
          "src": "/work/hz-plan.jpg",
          "alt": "Quarterly plan with initiatives, projects and milestones",
          "width": 2880,
          "height": 1850
        }
      },
      {
        "kind": "web",
        "cap": "Feedback beside delivery.",
        "capText": "What clients asked for, next to GitLab velocity, cycle time and burndown.",
        "img": {
          "src": "/work/hz-home.jpg",
          "alt": "Home dashboard with feedback and engineering metrics",
          "width": 2880,
          "height": 4220
        }
      },
      {
        "kind": "steps",
        "eyebrow": "How it works",
        "title": "Two of the eight steps use AI.",
        "small": true,
        "items": [
          {
            "n": "Person",
            "big": "Paste a meeting link",
            "label": "Any Granola link, or a bare ID"
          },
          {
            "n": "AI",
            "big": "Read the call, draft tickets",
            "label": "Fixed template, verbatim quotes"
          },
          {
            "n": "Person",
            "big": "Review and choose",
            "label": "Read, delete, pick a milestone"
          },
          {
            "n": "Code",
            "big": "Push to GitLab",
            "label": "Fixed issue format, links written back"
          }
        ],
        "cap": "How it works.",
        "capText": "AI reads and drafts, code does the rest, and a person decides what reaches engineering."
      },
      {
        "kind": "stats",
        "eyebrow": "In use",
        "items": [
          {
            "big": "~1 min",
            "label": "to draft a meeting’s tickets, down from 1–2 hours by hand"
          },
          {
            "big": "~155",
            "label": "draft tickets from 17 real meetings, Feb–Apr 2026"
          },
          {
            "big": "5 weeks",
            "label": "to build, with Claude Code"
          }
        ],
        "cap": "In use.",
        "capText": "Run on real client calls, with a person on the send button."
      }
    ]
  }
];
