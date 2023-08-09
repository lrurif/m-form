<template>
    <router-view v-slot="{ Component }">
        <main>
            <transition>
                <component :is="Component" />
            </transition>
        </main>
    </router-view>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.v-leave-active,
.v-enter-active {
    transition: all .6s;
}

.v-leave-to {
    transform: translate(100vw, 0);
    opacity: 0;
}

.v-enter-to {
    display: none;
}</style>