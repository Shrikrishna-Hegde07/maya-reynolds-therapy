import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f4f7f5",
          100: "#e6ede8",
          200: "#cfded3",
          300: "#a9c4b2",
          400: "#7ea48d",
          500: "#5d876e",
          600: "#476c56",
          700: "#3a5646",
          800: "#2f4538",
          900: "#273a30",
          DEFAULT: "var(--primary)",
        },
        sage: {
          50: "#f6f7f5",
          100: "#e8ece6",
          200: "#d3dbcf",
          300: "#b5c4af",
          400: "#94a88c",
          500: "#758c6c",
          600: "#5c7054",
          700: "#495843",
          800: "#3d4838",
          900: "#333c30",
        },
        sand: {
          50: "#faf9f6",
          100: "#f3f0ea",
          200: "#e6e0d4",
          300: "#d4cab7",
          400: "#bdaf98",
          500: "#a6957c",
          600: "#8e7d65",
          700: "#726452",
          800: "#5e5244",
          900: "#4f453a",
        },
        clay: {
          50: "#faf6f4",
          100: "#f3ece7",
          200: "#e7d9d0",
          300: "#d6beb1",
          400: "#be9a88",
          500: "#a87d69",
          600: "#916553",
          700: "#755041",
          800: "#604237",
          900: "#513930",
        },
        warmgray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(47, 69, 56, 0.06), 0 2px 6px -1px rgba(47, 69, 56, 0.04)',
        'card': '0 10px 30px -5px rgba(47, 69, 56, 0.08), 0 4px 10px -2px rgba(47, 69, 56, 0.03)',
        'elevated': '0 20px 40px -15px rgba(47, 69, 56, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
};

export default config;
