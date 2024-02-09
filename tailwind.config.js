/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["popins","pop1"], 
        DancingScript:["dancing","script"],
        Kanitdisplay:["kanit","display"]

      }
    },
  },
  plugins: [],
}

