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
        hermantoSky: "#C3EBFA",
        hermantoSkyLight: "#EDF9FD",
        hermantoPurple: "#7F5AF0",
        hermantoPurpleLight: "#C6B6F7",
        hermantoGreen: "#00BFA5",
        hermantoGreenLight: "#B3F5EC",
        hermantoYellow: "#FFC107",
        hermantoYellowLight: "#FFF9C4",
        hermantoRed: "#FF0000",
        hermantoRedLight: "#FFCDD2",
        hermantoBlue: "#1976D2",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
