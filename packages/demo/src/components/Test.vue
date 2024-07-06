<script lang="tsx">
import { defineComponent } from "vue";

const Bar = defineComponent({
    setup() {
        let color = null;
        onMounted(() => {
            color = useCssVar('--color-primary', document.documentElement)
        })
        return {
            run() {
                color.value = '#ccc'
                console.log("执行了")
            }
        }
    },
    render() {
        return (<div class="text-3xl font-bold underline text-primary text-color-primary" onClick={this.run}>
            自动导入组件
            <div class="text-color-text-primary">白色文字</div>
        </div>);
    },
});
export default Bar;
</script>
