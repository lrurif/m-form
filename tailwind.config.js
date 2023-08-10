/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 使用class而不是依赖操作系统主题
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

