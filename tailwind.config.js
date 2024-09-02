/** @type {import('tailwindcss').Config} */
module.exports = {
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
        g2: 'var(--g2)',
        cusred: "#D0164B",
        cusgreen:"#10D36E", 
      },
      fontFamily: {
        'dancing-script': ["'Dancing Script'", 'cursive'], 
      },
      fontSize: {
        'fancy': '1.5em', 
      },
      lineHeight: {
        'fancy': '0.9em', 
      },
      
    },
  },
  plugins: [],
};
