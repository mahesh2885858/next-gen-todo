import { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
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
      height: {
        calcMd: "calc(100vh - 77px)",
        calc: "calc(100vh - 66px)",
      },

      width: {
        "1/7": "14.2857143%",
      },
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))",
      },
    },
    colors(utils) {
      return {
        ...utils.colors,
        blue: {
          50: "#eaf0ff",
          100: "#d9e2ff",
          200: "#bbcaff",
          300: "#92a6ff",
          400: "#6775ff",
          500: "#4445ff",
          600: "#3423ff",
          700: "#2d1aea",
          800: "#2417bc",
          900: "#221c93",
          950: "#161155",
        },
        purple: {
          50: "#f8f8fa",
          100: "#f1f1f6",
          200: "#e5e5ef",
          300: "#d1d1e1",
          400: "#b8b6cf",
          500: "#9c97bb",
          600: "#8981aa",
          700: "#756c95",
          800: "#625a7d",
          900: "#514b67",
          950: "#353144",
        },
      };
    },
  },

  plugins: [],
};
export default config;
