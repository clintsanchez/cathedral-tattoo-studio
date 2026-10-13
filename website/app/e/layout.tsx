import { Instrument_Serif } from "next/font/google";
import "./e.css";

// Direction E only: a narrow display serif, after the Pierce the Emperor template.
const display = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], variable: "--font-e" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-e`}>{children}</div>;
}
