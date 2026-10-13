import type { Config } from "tailwindcss";

// Colours, radii and type follow website/css-tokens.css (interim palette, sampled from the logo raster).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#0A0A0A",
        surface: "#141414",
        raised: "#1E1C19",
        gold: "#B99040",
        bright: "#EBC853",
        deep: "#825F2C",
        text: "#E8E4DC",
        muted: "#A9A29A",
        hair: "rgba(185, 144, 64, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
      borderRadius: { btn: "6px", card: "12px", panel: "20px" },
      maxWidth: { site: "1200px", measure: "640px" },
    },
  },
  plugins: [],
};
export default config;
