/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_gray_for_dark_mode: "rgba(255, 255, 255, 0.1)",
        color_gray_for_light_mode:"rgba(0,0,0,.05)"
      },
      keyframes: {
        reveal_top: {
          "0%": {
            transform: "translateY(0)",
            zIndex: "30",
            filter: "blur(0)",
          },
          "50%": {
            transform: "translateY(-100%)",
          },
          "75%": {
            // filter: "blur(13px)",
            zIndex: "-20",
            filter: "blur(0)",
          },
          "95%": {
            zIndex: "-20",
            filter: "blur(13px)",
          },

          "100%": {
            transform: "translateY(0%)",
            // opacity: "0",
            display: "none",
            zIndex: "-20",
            filter: "blur(23px)",
          },
        },
        reveal_down: {
          "0%": {
            transform: "translateY(0)",
            filter: "blur(23px)",
            zIndex: "-20",
          },
          "50%": {
            transform: "translateY(-100%)",
            filter: "blur(0)",
            zIndex: "0",
          },

          "100%": {
            transform: "translateY(0%)",
            zIndex: "30",
            display: "none",
          },
        },
        smoke: {
          "0%": {
            opacity: 1,
            filter: "blur(0)",
            transform: "translate(0) rotate(0) scale(1)",
          },
          "50%": {
            opacity: 1,
            pointerEvents: "none",
          },
          "99%": {
            opacity: 0,
            // position: "absolute",
            filter: "blur(20px)",
            transform: "translate(300px, -300px) rotate(720deg) scale(4)",
          },
          "100%": {
            opacity: 0,
            // position: "absolute",
            filter: "blur(20px)",
            transform: "translate(0) rotate(0deg) scale(1)",
          },
        },
        hide: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        reveal_top: "reveal_top 2s  ease-in-out",
        reveal_down: "reveal_down 2s ease-in-out ",
        smoke: "smoke 3s linear forwards",
        hide: "hide 2s linear  ",
      },
      // fontFamily:{
      //   sans:["var(--fontName)"]
      // }
    },
  },
  plugins: [],
};
