import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '10px',
        },
        '.scrollbar-track-slate-800::-webkit-scrollbar-track': {
          backgroundColor: '#1e293b',
          borderRadius: '9999px',
        },
        '.scrollbar-thumb-purple-600::-webkit-scrollbar-thumb': {
          backgroundColor: '#9333ea',
          borderRadius: '9999px',
          border: '2px solid #1e293b',
        },
        '.scrollbar-thumb-purple-600:hover::-webkit-scrollbar-thumb': {
          backgroundColor: '#a855f7',
        },
      });
    },
  ],
};
export default config;
