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
      colors:{
        // firered:"#CF352E",
        // firelightorange:"#FFE59E",
        // fireorange:"#FFCB87",
        // whitetext:"#ffffff",

         firered:"#C40808",
         firelightorange:"#EA723E",
         fireorange:"#E04D24",
         whitetext:"#ffffff",


      }
    },
  },
  plugins: [],
};
export default config;
