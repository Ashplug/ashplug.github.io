/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,eta,js}", "./scripts/**/*.mjs"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        wordmark: ["Space Grotesk", "sans-serif"]
      }
    }
  },
  plugins: []
};
