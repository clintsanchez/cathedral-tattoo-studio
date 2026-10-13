// Geometry for an equilateral pointed arch: each side is an arc struck from the opposite springing
// point, so the head is 0.866 of the opening's width. Drawn from that construction, not from the logo.

export const EASE = [0.16, 1, 0.3, 1] as const;

const R = 100;
const RISE = (Math.sqrt(3) / 2) * R;

function headPolygon() {
  const pts: string[] = [];
  const add = (x: number, y: number) => pts.push(`${x.toFixed(2)}% ${((y / RISE) * 100).toFixed(2)}%`);
  for (let t = 180; t >= 120; t -= 4) {
    const a = (t * Math.PI) / 180;
    add(R + R * Math.cos(a), RISE - R * Math.sin(a));
  }
  for (let t = 56; t >= 0; t -= 4) {
    const a = (t * Math.PI) / 180;
    add(R * Math.cos(a), RISE - R * Math.sin(a));
  }
  return `polygon(${pts.join(", ")})`;
}

// Clips a box of ratio 1000:866 to the head of the arch.
export const HEAD_CLIP = headPolygon();

// The head alone, in a 1000 x 866 box.
export const HEAD_PATH = "M0 866 A1000 1000 0 0 1 500 0 A1000 1000 0 0 1 1000 866";

// The whole opening, in a 100 x 190 box.
export const ARCH_PATH = "M0 190 L0 86.6 A100 100 0 0 1 50 0 A100 100 0 0 1 100 86.6 L100 190";
