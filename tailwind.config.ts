import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
