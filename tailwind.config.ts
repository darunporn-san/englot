import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      backgroundImage: {
        // "banner-bg": "url('../englot/public/images/banner2.png')"
        'instagram-gradient': 'linear-gradient(225deg, #833AB4, #FD1D1D, #F56040, #FCAF45, #FFDC80)',

      },
      colors: {
        instagram: {
          purple: '#833AB4',
          red: '#FD1D1D',
          orange: '#F56040',
          yellow: '#FCAF45',
          pink: '#FFDC80',
        },
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
        primary: {
          DEFAULT: "#FF592C;",
          purple: "#9757D7",
          pink: "#EF466F",
          green: "#45B36B",
        },
        secondary: {
          DEFAULT: "#3772FF",
          pink: "#E4D7CF",
          yellow: "#FFD166",
          purple: "#CDB4DB",
        },
        gray: {
          DEFAULT: "#ffffff",
          100: "#FCFCFD",
          200: "#F4F5F6",
          300: "#E6E8EC",
          400: "#B1B5C4",
          500: "#777E91",
          600: "#353945",
          700: "#23262F",
          800: "#141416",
        },
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1780px',
      '4xl': '2160px', // only need to control product grid mode in ultra 4k device
    },
  },
  plugins: [],
};
export default config;
