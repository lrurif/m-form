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
        "color-primary": "var(--color-primary)", // 主题色
        "color-success": "var(--color-success)", // 成功颜色
        "color-warning": "var(--color-warning)", // 警告颜色
        "color-danger": "var(--color-danger)", // 危险颜色
        "color-info": "var(--color-info)", // 信息颜色
        "color-text-primary": "var(--color-text-primary)", // 主要文字颜色
        "color-text-regular": "var(--color-text-regular)", // 常规文字颜色
        "color-text-secondary": "var(--color-text-secondary)", // 次要文字颜色
        "color-text-placeholder": "var(--color-text-placeholder)", // 占位符文字颜色
        "border-color-base": "var(--border-color-base)", // 一级边框颜色
        "border-color-light": "var(--border-color-light)", // 二级边框颜色
        "border-color-lighter": "var(--border-color-lighter)", // 三级边框颜色
        "border-color-extra-light": "var(--border-color-extra-light)", // 四级边框颜色
        "background-color-base": "var(--background-color-base)", // 基础背景色
      }
    }
  },
  plugins: [],
}

