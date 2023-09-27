/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          ground: {
            DEFAULT: "#040d19",
            text: "#ffffffcc",
          },
        },
      },
    },
  },
  plugins: [],
};
