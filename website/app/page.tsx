import Link from "next/link";
import { Lockup } from "@/components/shared/Chrome";
import { Piece } from "@/components/shared/Piece";
import { photos } from "@/lib/site";

// Round three: three more templates, each with a hero picture made for the page (Clint asked for a
// branded 3D tattoo machine and for the warrior templates, 2026-10-12). The pictures are generated,
// not photographs of the studio or its equipment.
const third = [
  {
    id: "g",
    name: "G · The machine",
    kind: "Product spotlight",
    text: "A tattoo machine in black and gold under one spotlight, with the Cathedral emblem engraved on its side. A three-line headline, a block of tiles in the corner, then the page turns gold for the steps.",
    photo: photos.tiger,
  },
  {
    id: "h",
    name: "H · The knight",
    kind: "Illustrated poster",
    text: "A lone knight in a field in front of a gold sun, the headline set very large on either side, a ring of small letters turning round the sun, pale notched cards.",
    photo: photos.sword,
  },
  {
    id: "i",
    name: "I · The interior",
    kind: "Cinematic interior",
    text: "A gothic interior with a lit round window, the name standing in the room as a solid white object, a numbered strip of the four steps, three pieces stood in a row like blades.",
    photo: photos.swan,
  },
];

// Round two, built after specific templates in the Figma pack. The design kit's layout rules are set
// aside in these (Clint, 2026-10-12): photographs run large, type sits on them, more than two typefaces.
const second = [
  {
    id: "d",
    name: "D · Noir",
    kind: "Dark editorial",
    text: "One photograph run to the edge of the screen and melted into black. A stacked didone headline, the name spread across the foot of the screen, a glass card on the corner, then three tall cards for the kinds of piece.",
    photo: photos.hands,
  },
  {
    id: "e",
    name: "E · The artifact",
    kind: "Museum piece",
    text: "The gold logo stands alone on a lit wall like a museum piece, with the headline set very large behind it. Then the steps as glass cards around one object, and the work as a row that turns in depth.",
    photo: photos.tiger,
  },
  {
    id: "f",
    name: "F · Manifesto",
    kind: "Fine serif editorial",
    text: "A light serif headline in mixed roman and italic, one tall piece in the middle of the screen, thin rules behind everything, gold initials, a row of pale cards and four numbered rounds.",
    photo: photos.medusa,
  },
];

const first = [
  {
    id: "a",
    name: "A · The nave",
    kind: "Scroll-through showpiece",
    text: "A drawn gothic nave in real depth that you walk down by scrolling, past the work hung in the side bays, to the window at the far end.",
    photo: photos.swan,
  },
  {
    id: "b",
    name: "B · By the book",
    kind: "Quiet and classic",
    text: "The kit as written: the logo centred, one large photograph at a time, a single gold hairline, nothing that moves.",
    photo: photos.portrait,
  },
  {
    id: "c",
    name: "C · Three doors",
    kind: "Walk-in led",
    text: "Says whether the studio is open right now, then offers three doors that swing open: walk in, book a big piece, or ask first.",
    photo: photos.lambs,
  },
];

function Cards({ list }: { list: typeof first }) {
  return (
    <ul className="mt-8 grid gap-8 md:grid-cols-3">
      {list.map((d) => (
        <li key={d.id} className="flex flex-col border border-hair bg-surface p-6">
          <Piece photo={d.photo} width={360} caption={false} sizes="(min-width: 768px) 360px, 100vw" className="mx-auto" />
          <p className="label mt-6">{d.kind}</p>
          <h3 className="h3 mt-2">{d.name}</h3>
          <p className="mt-3 flex-1 text-muted">{d.text}</p>
          <div className="mt-6 grid gap-3">
            <Link href={`/${d.id}/`} className="btn btn-primary">
              Home page
            </Link>
            <Link href={`/${d.id}/artists/roger-cazares/`} className="btn btn-secondary">
              Inner page
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="wrap py-16 md:py-24">
        <Lockup width={200} priority />
        <span className="hairline mt-12" />
        <h1 className="h1">Nine directions for the website</h1>
        <div className="mt-4 max-w-measure space-y-4 text-muted">
          <p>
            Nine different looks for the Cathedral Tattoo Studio site. The words, the facts and the tattoo photographs are the same in every one; what changes is the layout, the type and the first thing a visitor sees. Each has a home page and an artist page.
          </p>
          <p>
            Open a few, on your phone as well as a computer, and tell us which feels most like the studio. You can mix: the opening from one and the pages from another. The bar across the top of each page switches between them.
          </p>
          <p>
            Three things are stand-ins for now. The words are a first draft. The pictures in G, H and I (the tattoo machine, the knight and the cathedral interior) are illustrations made for this preview. And the dashed boxes mark photographs we still need: the room, the artists at work, and this month&apos;s open dates.
          </p>
        </div>
        <h2 className="h2 mt-16">G, H and I</h2>
        <Cards list={third} />
        <h2 className="h2 mt-20">D, E and F</h2>
        <Cards list={second} />
        <h2 className="h2 mt-20">A, B and C</h2>
        <Cards list={first} />
      </div>
    </main>
  );
}
