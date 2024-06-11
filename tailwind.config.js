/** @type {import('tailwindcss').Config} */
module.exports = {
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
      boxShadow: {
        'custom': '0 9px 34px 0 rgba(0, 0, 0, 0.1)', 
        'inner-border': 'inset 0 0 0 2px rgba(0, 0, 0, 0.5)', 
      },
      colors:{
        customGray: '#1c1c1c',
        customText: '#cccccc',
        customBorder: '#3b3b3b',
        customColor: '#d5d5d5',
        customBackground: '#0a0a0a',
        customButtonbg: '#1c1c1c',
        colorShadow: '#434343',
        colorBorder: '#151515',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
