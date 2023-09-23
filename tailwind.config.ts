import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        base: {
          100: "#FBF9FE",
          200: "#AFABB6",
          300: "#252529",
          400: "#17171A",
          500: "#111112",
          600: "#0C0C0D",
        },
        success: {
          600: "#4E995E",
          900: "#2F723D",
        },
        purple: {
          400: "#A881E6",
          600: "#7450AC",
          900: "#523480",
        },
        pink: {
          600: "#DB5BBF",
          900: "#251622",
        },
        orange: {
          600: "#E07B67",
          900: "#261A17",
        },
        yellow: {
          600: "#BB9F3A",
          900: "#211E12",
        },
        green: {
          600: "#8CAD51",
          900: "#1C2015",
        },
        blue: {
          600: "#7B94CB",
          900: "#1A1D23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
