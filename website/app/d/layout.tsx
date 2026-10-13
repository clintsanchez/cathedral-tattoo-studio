import { Bodoni_Moda } from "next/font/google";
import "./d.css";

// Direction D only: a didone for the display lines, after the Ophidia template.
const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-d" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-d`}>{children}</div>;
}
