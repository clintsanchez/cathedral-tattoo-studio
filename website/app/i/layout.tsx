import { Archivo } from "next/font/google";
import "./i.css";

// Direction I only: a plain grotesk, after the Yugen template.
const display = Archivo({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-i" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-i`}>{children}</div>;
}
