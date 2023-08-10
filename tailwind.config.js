/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 使用class而不是依赖操作系统主题
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_color: "var(--el-bg-color)",
        primary: "var(--el-color-primary)",
        text_color_primary: "var(--el-text-color-primary)",
        text_color_regular: "var(--el-text-color-regular)"
      }
    }
  },
  plugins: [],
}

