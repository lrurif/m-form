<script lang="ts" setup>
import { getCurrentInstance } from "vue"
import { usePreferredDark } from "@vueuse/core"
import animationView from "@/layouts/animation-view.vue"
import useUserStore from "@/store/modules/user";
const isDark = usePreferredDark();
const userStore = useUserStore();
console.log(isDark, 'isDark');
const { proxy } = getCurrentInstance();
const toggleLanguage = () => {
    if (proxy.$i18n.locale === 'zh') {   // 判断当前语言
        proxy.$i18n.locale = 'en'   // 设置当前语言
    } else {
        proxy.$i18n.locale = 'zh'
    }
}
const changeToken = () => {
    userStore.$patch({
        token: "2222"
    })
}
</script>
<template>
    <div>

        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/404">404</router-link>
        <div>{{ $t("common.hello") }}</div>
        <button @click="toggleLanguage">切换语言</button>
        <test></test>
        <router-link to="/login/aa">去往aa</router-link>

        <router-link to="/login/bb">去往bb</router-link>

        <icon-carbon-accessibility style="color: red;font-size: 30px;"></icon-carbon-accessibility>
        <icon-emojione-v1-top-hat></icon-emojione-v1-top-hat>
        <animationView></animationView>
        <div class="menu min-[400px]:text-center dark:bg-slate-800 dark:text-white red:text-orange-500 bg_color">menu</div>
        <div>我的token：{{ userStore.token }}</div>
        <button @click="changeToken">修改我的token</button>
    </div>
</template>
<style lang="scss" scoped>
.menu {
    --name: 1000px;
    $name: var(--name);
    width: $name;
}
</style>