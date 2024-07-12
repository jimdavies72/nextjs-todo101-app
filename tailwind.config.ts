import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "txt-sdw": "drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
