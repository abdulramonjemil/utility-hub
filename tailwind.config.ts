import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  content: ["./src/app/**/*.{tsx}"],
  plugins: [animate],

  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-gt-walsheim-pro)"] }
    }
  }
}

export default config
