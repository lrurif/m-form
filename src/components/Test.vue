<script lang="tsx">
    import { defineComponent } from "vue";
    let color = 'red'
    const Bar = defineComponent({
        render() {
            return (<div  class="text-3xl font-bold underline" style={{color: color}}>能男男女女</div>);
        },
    });
    export default Bar;
</script>
