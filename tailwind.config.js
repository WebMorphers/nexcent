/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        'sm': '447px',
        // => @media (min-width: 640px) { ... }
  
        'md': '641px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1170px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1328px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    extend: {
      colors: {
        "black": "#263238",
        "grey-10" : "#ABBED1",
        "grey-20" : "#89939E",
        "grey-30" : "#717171",
        "grey-40" : "#4D4D4D",
        "silver" : "#F5F7FA",
        "white" : "#FFFFFF",
        "green-10" : "#E8F5E9",
        "green-20" : "#C8E6C9",
        "green-30" : "#A5D6A7",
        "green-40" : "#81C784",
        "green-50" : "#66BB69",
        "green-60" : "#43A046",
        "green-70" : "#388E3B",
        "green-80" : "#237D31",
        "green-90" : "#1B5E1F",
        "green-100" : "#103E13",
        "warning" : "#FBC02D",
        "error" : "#E53835",
        "success" : "#2E7D31",
        "primary" : "#28CB8B",
        "secondary" : "#263238",
        "info" : "#2194f3",
      },
      fontFamily:{
        'Inter' : ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

