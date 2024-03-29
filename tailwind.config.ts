import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sp: { max: "767px" },
      pc: { min: "768px" },
    },
    // カラーパレット定義( https://www.figma.com/file/8JNl8iF4w9cDaanBaXauAD/Blog?node-id=18-182&t=hP9Kfvck2BC3y6gR-0 )
    colors: {
      main: "#117099",
      accent: "#A94949",
      backGround: "#272727",
      font: "#FFFFFF",
      sub: "#3C3C3C",
      subFont: "#CBCBCB",
    },
    // フォントサイズ定義( https://www.figma.com/file/8JNl8iF4w9cDaanBaXauAD/Blog?node-id=21-48&t=hP9Kfvck2BC3y6gR-0 )
    fontSize: {
      first: "3.8rem",
      second: "2.8rem",
      third: "2rem",
      fourth: "1.6rem",
      fifth: "1.4rem",
      sixth: "1.2rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      circle: "circle",
      roman: "lower-roman",
    },
    boxShadow: {
      dropMain: "2px 5px 10px rgba(255, 255, 255, 0.15)",
      dropUp: "0px -5px 10px rgba(255, 255, 255, 0.15)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
