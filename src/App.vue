<script setup lang="ts">
import { getCurrentInstance } from "vue"

const { proxy } = getCurrentInstance();
const toggleLanguage = () => {
  if (proxy.$i18n.locale === 'zh') {   // 判断当前语言
    proxy.$i18n.locale = 'en'   // 设置当前语言
  } else {
    proxy.$i18n.locale = 'zh'
  }
}
</script>

<template>
  <router-link to="/login">登录</router-link>
  <router-link to="/register">注册</router-link>
  <router-view></router-view>
  <div class="shadow-sm">
    <button @click="toggleLanguage">切换语言</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <Test></Test>
    <a href="https://vuejs.org/" target="_blank">
      {{ $t("common.hello") }}
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.shadow-sm {
  transform: translate(-10px);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
