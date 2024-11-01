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
        
        //1. Renk Paleti - Lama
        // lamaSky: "#C3EBFA",
        // lamaSkyLight: "#EDF9FD",
        // lamaPurple: "#CFCEFF",
        // lamaPurpleLight: "#F1F0FF",
        // lamaYellow: "#FAE27C",
        // lamaYellowLight: "#FEFCE8",

        //2. Renk Paleti - Açık Logo Tonları
        // lamaSky: "#F6B0B0",
        // lamaSkyLight: "#F6C4A2",
        // lamaPurple: "#F9E97E",
        // lamaPurpleLight: "#D9D9D9",
        // lamaYellow: "#FAE27C",
        // lamaYellowLight: "#FEFCE8",

        //3. Renk Paleti - Soluk Logo Tonları
         lamaSky: "#EA4C4C",
         lamaSkyLight: "#ea723e",
         lamaPurple: "#FAE27C",
         lamaPurpleLight: "#EAEAEA",
         lamaYellow: "#FAE27C",
         lamaYellowLight: "#FFB84D",
         pastelOrange: "F2B500",

        //4. Renk Paleti - Logo Renkleri
        // lamaSky: "#C40808",
        // lamaSkyLight: "#EA723E",
        // lamaPurple: "#FFB84D",
        // lamaPurpleLight: "#F1F0FF",
        // lamaYellow: "#FAE27C",
        // lamaYellowLight: "#FEFCE8",

        //5. Renk Paleti
        // lamaSky: "#C3EBFA",
        // lamaSkyLight: "#EDF9FD",
        // lamaPurple: "#CFCEFF",
        // lamaPurpleLight: "#FFE59E",
        // lamaYellow: "#FAE27C",
        // lamaYellowLight: "#FEFCE8",
        
        

        whitetext:"#ffffff",





        


      }
    },
  },
  plugins: [],
};
export default config;
