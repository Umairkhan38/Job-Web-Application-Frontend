/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blueHeading:{
        backgroundColor: "#3c65f5",
        bottom: "-6px",
        content: "",
      height: "25px",
    left: 0,
    opacity: .1,
    position: "absolute",
    width: "100%",
      zIndex: -1,
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        leftright: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        animation: {
          updown: 'updown 2s ease-in-out infinite',
          leftright: 'leftright 2s ease-in-out infinite',
        },
    },
  },
},

  plugins: [
    
  ],
}

