<script lang="tsx">
import { defineComponent } from "vue";

const Bar = defineComponent({
    setup() {
        let color = null;
        onMounted(() => {
            color = useCssVar('--el-bg-color', document.documentElement)
        })
        return {
            run() {
                color.value = '#ccc'
                console.log("执行了")
            }
        }
    },
    render() {
        return (<div class="text-3xl font-bold underline text-primary bg-bg_color" onClick={this.run}>
            111222333
        </div>);
    },
});
export default Bar;
</script>
