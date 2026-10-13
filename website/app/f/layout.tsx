import { Cormorant_Garamond } from "next/font/google";
import "./f.css";

// Direction F only: a light serif set in mixed roman and italic, after the Mythos template.
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400"], style: ["normal", "italic"], variable: "--font-f" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-f`}>{children}</div>;
}
