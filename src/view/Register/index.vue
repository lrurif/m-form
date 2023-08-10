<script lang="ts" setup>
onMounted(() => {
    let yinyong = document.querySelector(".yinyong");
    let dingwei = document.querySelector(".dingwei") as HTMLElement;
    const originDom = yinyong;
    while (yinyong?.parentElement) {
        yinyong = yinyong.parentElement;
        if (/[auto|scroll]/.test(getComputedStyle(yinyong).overflow)) {
            yinyong.addEventListener("scroll", update)
            onUnmounted(() => {
                yinyong.removeEventListener("scroll", update)
            });
        }
    }
    window.addEventListener("scroll", update)
    onUnmounted(() => {
        window.removeEventListener("scroll", update)
    });

    function update() {
        let pos = originDom.getBoundingClientRect();
        dingwei.style.left = `${pos.left}px`;
        dingwei.style.top = `${pos.top + pos.height}px`;
    }
    requestAnimationFrame(update)
    

})
</script>
<template>
    <div style="height: 10000px;">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/404">404</router-link>
        <div>注册页面</div>
        <div class="overflow-auto h-60 border mt-36">
            <div class="h-96">
                <div class="overflow-auto h-32 border">
                    <div class="h-60 pt-24">
                        <div class="yinyong">我是依赖对象</div>

                    </div>
                </div>
            </div>
        </div>
        <div class="dingwei shadow-lg">
            我是内容
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dingwei {
    position: fixed;
}
</style>