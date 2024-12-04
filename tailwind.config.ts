import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greenBackgroundTransparent: "rgba(0,194,120,.12)",
        redBackgroundTransparent: "rgba(234,56,59,.12)",
        baseBackgroundL2: "rgb(32,33,39)",
        baseBackgroundL3: "rgb(32,33,39)",
        greenPrimaryButtonBackground: "rgb(0,194,120)",
      },
      borderColor: {
        redBorder: "rgba(234,56,59,.5)",
        greenBorder: "rgba(0,194,120,.4)",
        baseBorderMed: "#cccccc",
        accentBlue: "rgb(76,148,255)",
        baseBorderLight: "rgb(32,33,39)",
        baseTextHighEmphasis: "rgb(244,244,246)",
      },
      textColor: {
        greenPrimaryButtonText: "rgb(20,21,27)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari and Opera */,
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
