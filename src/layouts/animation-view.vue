<template>
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition mode="out-in">
                <KeepAlive>
                    <Suspense>
                        <!-- 主要内容 -->
                        <component :is="Component"></component>
                        <!-- 加载中状态 -->
                        <template #fallback>
                            路由组件加载中...
                        </template>
                    </Suspense>
                </KeepAlive>
            </Transition>
        </template>
    </RouterView>
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
}
</style>