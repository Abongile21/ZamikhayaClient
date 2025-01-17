/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require('@tailwindcss/aspect-ratio'),

  ],
  
  daisyui: {
    themes: ["light", "synthwave"],
  },
}

