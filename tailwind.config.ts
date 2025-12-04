/**
 * Tailwind config for PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pr_gold: "#D4AF37",
        pr_blue: "#1C2A57",
        pr_silver: "#C8CCD4",
        pr_dark: "#0B1020"
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
