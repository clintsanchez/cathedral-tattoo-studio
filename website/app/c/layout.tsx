import "./c.css";

// Direction C: its own stylesheet, nothing else. The page chrome comes from components/shared.
export default function CLayout({ children }: { children: React.ReactNode }) {
  return <div className="c-root">{children}</div>;
}
