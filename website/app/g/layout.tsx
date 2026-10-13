import { Instrument_Sans } from "next/font/google";
import "./g.css";

// Direction G only: a light grotesk with a true italic, after the Ferrari 296 GTB template.
const display = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-g" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-g`}>{children}</div>;
}
