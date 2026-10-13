// Every fact, line of copy and photograph the three directions share.
// Facts: ../README.md and ../HANDOFF.md (checked live 2026-10-11). Copy: ../brand/copy-deck.md v1.1, verbatim.
// Photographs: ../design-kit/assets/photos/PHOTO-MANIFEST.md. Nothing here has been seen by the studio.

export const site = {
  name: "Cathedral Tattoo Studio",
  phone: "(225) 301-9527",
  tel: "tel:+12253019527",
  email: "cathedraltattoostudio25@gmail.com",
  street: "1318 Florida Ave SW",
  city: "Denham Springs, LA 70726",
  maps: "https://www.google.com/maps/search/?api=1&query=Cathedral+Tattoo+Studio+1318+Florida+Ave+SW+Denham+Springs+LA+70726",
  instagram: { handle: "@cathedral_tattoostudio", url: "https://www.instagram.com/cathedral_tattoostudio/" },
  // Exact count and date, re-checked before publishing (brand/context.md, guardrail 5).
  rating: "5.0 on Google from 6 reviews (11 October 2026)",
  hoursLine: "Monday to Thursday 10am to 6pm. Friday and Saturday 10am to 7pm. Closed Sunday.",
};

// Day 0 is Sunday. Hours in the studio's own time zone (America/Chicago), 24-hour clock.
export const hours: { day: string; open?: number; close?: number; text: string }[] = [
  { day: "Sunday", text: "Closed" },
  { day: "Monday", open: 10, close: 18, text: "10am to 6pm" },
  { day: "Tuesday", open: 10, close: 18, text: "10am to 6pm" },
  { day: "Wednesday", open: 10, close: 18, text: "10am to 6pm" },
  { day: "Thursday", open: 10, close: 18, text: "10am to 6pm" },
  { day: "Friday", open: 10, close: 19, text: "10am to 7pm" },
  { day: "Saturday", open: 10, close: 19, text: "10am to 7pm" },
];

export const policies = ["Privacy", "Terms", "Cookies", "Accessibility", "Disclaimer", "Sitemap"];

// Button labels are fixed by the design kit (file 3, section 10).
export const labels = {
  work: "See the work",
  call: `Call or text ${"(225) 301-9527"}`,
  callShort: "Call or text",
  dates: "Check open dates",
  directions: "Get directions",
};

export const home = {
  // The proposed tagline. The studio has not seen it: confirm before publishing.
  headline: "Work worth carrying",
  descriptor: "Custom tattoo work in Denham Springs. Black and grey, fine line, lettering and cover-ups. Walk in, or book ahead for the big ones.",
  intro: [
    "Some tattoos are decoration. Some you carry for the rest of your life.",
    "Most of what comes through here is the second kind: a portrait of someone who died, a verse that matters, a piece that finishes a sleeve you started years ago. That work takes planning, and it takes more than one sitting.",
    "So we plan it. You'll know the size, the placement, how many sessions it needs and what it costs before anything permanent happens.",
  ],
  steps: [
    {
      n: "1",
      title: "Tell us what you're thinking about.",
      body: "Send a reference photo, roughly where you want it, and rough size. A screenshot is fine. You don't need to have it worked out.",
    },
    {
      n: "2",
      title: "We'll talk it through.",
      body: "What will work on skin and what won't, how it'll age, where it should sit. If it's a portrait, bring the clearest photo you have. Face-on is best, but most things can be worked with.",
    },
    {
      n: "3",
      title: "You'll get a plan.",
      body: "Size, placement, number of sittings, and the cost, before anything is drawn.",
    },
    {
      n: "4",
      title: "Then we tattoo it.",
      body: "Large pieces run across several sittings, spaced a few weeks apart to heal.",
    },
  ],
  firstTime: {
    title: "First time, or nervous about it",
    body: "Say so when you come in. We'll walk you through what happens before anything starts, and you can ask whatever you want.",
    // One quote, verbatim, first name only. Re-check it is still live before launch.
    quote: "I am an anxious person so that's a big deal for me.",
    by: "Alesha, Google review",
  },
  portfolioIntro: "Sorted by what the piece is, not by style. Every piece is credited to the artist who made it.",
  availability: "Open dates are posted at the start of each month. First come, first served.",
};

export const roger = {
  slug: "roger-cazares",
  name: "Roger Cazares",
  // Ownership-safe wording (guardrail 1). No "owner", no years, no licensing.
  role: "Tattoo artist at Cathedral Tattoo Studio",
  bio: [
    "Roger works mostly in black and grey: portraits, religious and memorial pieces, fine line and dotwork, and large-scale sleeve and back work. He also does colour and cover-ups.",
    "He signs his work with the RC monogram you'll see on most of the photos here.",
  ],
  instagram: { handle: "@rc_tattoos", url: "https://www.instagram.com/rc_tattoos/" },
};

// Named by customers in Google reviews. Nothing is on file for either: no page is written.
export const otherArtists = ["Mikayla Paul", "Cleo"];

export type Photo = {
  src: string;
  alt: string;
  // "[piece], [placement]. Roger Cazares." Sits beneath the photograph, never on it.
  caption: string;
  w: number;
  h: number;
  // Widest it may be shown, in CSS pixels: half the file, so a 2x screen stays sharp.
  max: number;
};

const p = (file: string, w: number, h: number, alt: string, caption: string): Photo => ({
  src: `/photos/${file}.webp`,
  alt,
  caption,
  w,
  h,
  max: Math.floor(w / 2),
});

// Cropped by the manifest's cautions; otherwise untouched. No filter, no grade, no retouching.
export const photos = {
  portrait: p("black-and-grey-memorial-portrait-forearm-tattoo-by-roger-cazares", 1536, 2048, "Black and grey portrait tattoo of a smiling young man on an inner forearm, by Roger Cazares", "Memorial portrait, forearm. Roger Cazares."),
  motherChild: p("mother-and-child-with-flowers-forearm-tattoo-by-roger-cazares", 1588, 2048, "Black and grey tattoo of a mother holding a baby among flowers, from elbow to wrist, by Roger Cazares", "Mother and child with flowers, forearm. Roger Cazares."),
  hands: p("fine-line-hands-with-flowers-forearm-tattoo-by-roger-cazares", 1598, 2048, "Fine line tattoo of an adult's hand holding a baby's hand between two flowers on an inner forearm, by Roger Cazares", "Hands with flowers, forearm. Roger Cazares."),
  eye: p("dotwork-eye-and-thorns-calf-tattoo-by-roger-cazares", 1470, 1838, "Dotwork tattoo of an eye inside a broken heart shape wrapped in thorns on a calf, by Roger Cazares", "Eye and thorns, calf. Roger Cazares."),
  swan: p("dotwork-swan-and-cattails-thigh-tattoo-by-roger-cazares", 1608, 2048, "Dotwork tattoo of a swan on water among cattails on a thigh, by Roger Cazares", "Swan and cattails, thigh. Roger Cazares."),
  lambs: p("dotwork-matching-lambs-above-the-knee-tattoo-by-roger-cazares", 1626, 2048, "Two small dotwork tattoos of leaping lambs, one above each knee, by Roger Cazares", "Matching lambs, above the knee. Roger Cazares."),
  butterfly: p("blackwork-butterfly-upper-arm-tattoo-by-roger-cazares", 1536, 2048, "Blackwork tattoo of a butterfly with one wing dissolving into liquid shapes on the back of an upper arm, by Roger Cazares", "Butterfly, upper arm. Roger Cazares."),
  sword: p("blackwork-sword-spine-back-tattoo-by-roger-cazares", 1496, 1680, "Blackwork tattoo of a long sword running down a spine, photographed in black and white, by Roger Cazares", "Sword, spine. Roger Cazares."),
  tiger: p("black-and-grey-tiger-forearm-tattoo-by-roger-cazares", 1080, 1440, "Black and grey realism tattoo of a snarling tiger's face along an inner forearm, by Roger Cazares", "Tiger, forearm. Roger Cazares."),
  // A severe image: never beside first-timer copy, never in the same view as the logo.
  medusa: p("black-and-grey-medusa-calf-tattoo-by-roger-cazares", 1080, 1440, "Black and grey tattoo of Medusa with a crescent on her brow and snakes for hair on a calf, by Roger Cazares", "Medusa, calf. Roger Cazares."),
  owl: p("black-and-grey-owl-half-sleeve-tattoo-by-roger-cazares", 1080, 1440, "Black and grey realism tattoo of an owl with one orange eye covering an outer upper arm, by Roger Cazares", "Owl, half sleeve. Roger Cazares."),
  lion: p("black-and-grey-lion-above-the-knee-tattoo-by-roger-cazares", 1080, 1296, "Black and grey tattoo of a lion's head with an open mane above a knee, by Roger Cazares", "Lion, above the knee. Roger Cazares."),
  // One saturated colour image per view at most.
  heart: p("colour-heart-thistles-and-goldfinches-thigh-tattoo-by-roger-cazares", 1536, 1925, "Neo-traditional colour tattoo of a red heart with an eye, two goldfinches and thistles covering a thigh, by Roger Cazares", "Heart with thistles and goldfinches, thigh. Roger Cazares."),
  orchid: p("colour-orchid-ankle-tattoo-by-roger-cazares", 1346, 2048, "Colour tattoo of a purple and pink orchid with a black outline above an ankle, by Roger Cazares", "Orchid, ankle. Roger Cazares."),
  moth: p("colour-moth-upper-back-tattoo-by-roger-cazares", 1592, 1556, "Colour tattoo of a pink, purple and pale blue moth at the base of the neck, by Roger Cazares", "Moth, upper back. Roger Cazares."),
  // Religious imagery: tattoo work only. Never a hero, never a background, never beside a headline.
  christDove: p("black-and-grey-christ-and-dove-forearm-tattoo-by-roger-cazares", 1578, 2048, "Black and grey realism tattoo of Christ in a crown of thorns above a dove on an inner forearm, by Roger Cazares", "Christ and dove, forearm. Roger Cazares."),
  // A design, not a tattoo. Small only.
  design: p("ship-and-skull-original-design-by-roger-cazares", 1536, 2048, "A finished tattoo design on a tablet screen: a tall ship with red flames rising from a grey skull, by Roger Cazares", "Ship and skull, original design. Roger Cazares."),
};

// "Sorted by what the piece is." One group is shown at a time, four pieces at most.
export const groups: { id: string; name: string; pieces: Photo[] }[] = [
  { id: "portraits", name: "Portraits and family pieces", pieces: [photos.portrait, photos.motherChild, photos.hands] },
  { id: "fine-line", name: "Fine line and dotwork", pieces: [photos.swan, photos.lambs, photos.eye] },
  { id: "black-and-grey", name: "Black and grey", pieces: [photos.tiger, photos.lion, photos.medusa, photos.christDove] },
  { id: "large", name: "Large pieces and blackwork", pieces: [photos.sword, photos.owl, photos.butterfly] },
  { id: "colour", name: "Colour", pieces: [photos.heart, photos.orchid, photos.moth] },
];

// Direction C: three ways in. Every sentence is from the copy deck or the hours; nothing is new copy.
export const doors = [
  {
    id: "walk-in",
    title: "Walk in",
    body: ["Walk in, or book ahead for the big ones.", site.hoursLine],
    action: "directions" as const,
  },
  {
    id: "book-ahead",
    title: "Book ahead",
    body: [
      "Tell us what you want tattooed, roughly where on your body, and rough size. Add a reference photo if you have one.",
      "We'll come back with what it'll take.",
    ],
    action: "call" as const,
  },
  {
    id: "first-time",
    title: "First time",
    body: [home.firstTime.body],
    quote: { text: home.firstTime.quote, by: home.firstTime.by },
    action: "call" as const,
  },
];

// Photographs that do not exist yet. Each is shown as a labelled slot, never filled with anything else.
export const slots = {
  room: "Photo needed: the room at 1318 Florida Ave SW. The door, the front room, a chair, in warm light.",
  atWork: "Photo needed: Roger Cazares at work in the studio.",
  artist: "Nothing on file yet: name as they want it shown, Instagram handle and photographs of their work.",
  dates: "Dates needed: this month's open dates, from the studio.",
};
