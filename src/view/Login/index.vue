<script lang="ts" setup>
import { getCurrentInstance } from "vue"
import { usePreferredDark } from "@vueuse/core"
const isDark = usePreferredDark();
console.log(isDark, 'isDark');
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
    <router-link to="/404">404</router-link>
    <div>{{ $t("common.hello") }}</div>
    <button @click="toggleLanguage">切换语言</button>
</template>
<style lang="scss" scoped></style>