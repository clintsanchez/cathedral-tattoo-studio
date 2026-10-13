import { Archivo } from "next/font/google";
import "./h.css";

// Direction H only: a heavy, wide grotesk, after the Silent Shogun template.
const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-h" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} dir-h`}>{children}</div>;
}
