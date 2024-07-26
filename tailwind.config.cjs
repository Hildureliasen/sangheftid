// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//   plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Londrina Solid", "Staatliches", "Fira Sans", "sans-serif"],
//       },
//       colors: {
//         surface: {
//           primary: {
//             default: "#F2ECE0",
//             hover: "#F5F0E6",
//             pressed: "#C2BDB3",
//           },
//         },
//         tekst: {
//           primary: {
//             grøn: "#686346",
//           },
//           secondary: {
//             default: "#FCFBF9",
//           },
//         },
//       },
//     },
//   },
// };

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
        kalnia: ["Kalnia", "serif"], // Tilføj denne linje
      },
      backgroundImage: {
        "custom-bg": "url('/bg_frontp.svg')",
      },
      colors: {
        surface: {
          primary: {
            default: "#F2ECE0",
            hover: "#F5F0E6",
            pressed: "#C2BDB3",
          },
        },
        tekst: {
          primary: {
            grøn: "#686346",
            orange: "#D25827",
            brun: "#693A16",
            beige: "#EFDDAF",
          },
          secondary: {
            default: "#FCFBF9",
          },
        },
      },
    },
  },
};
