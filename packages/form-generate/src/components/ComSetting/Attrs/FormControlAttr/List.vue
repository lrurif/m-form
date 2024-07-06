<script  setup>
import FormControlAttr from './index.vue';
import { CircleCloseFilled } from '@element-plus/icons-vue';

const props = defineProps({
  config: Object,
  disabled: {
    type: Boolean,
    default: false,
  },
});

function handleAdd() {
  /* eslint-disable */
  props.config.value.push(createNewItemData(props.config.children));
}

function handleDelete(index) {
  /* eslint-disable */
  props.config.value.splice(index, 1);
}

function createNewItemData(list) {
  return list.reduce((pre, cur) => {
    pre[cur.key] = JSON.parse(JSON.stringify(cur.value));
    return pre;
  }, {});
}
</script>

<template>
  <div class="list-wrapper">
    <div v-for="(item, index) in config.value || []" :key="index" class="list-item">
      <FormControlAttr :configs="config.children" :form-data="item" noBindFunc :disabled="disabled"/>
      <el-icon class="delete-icon" @click="handleDelete(index)" v-if="!disabled">
        <CircleCloseFilled />
      </el-icon>
    </div>
    <el-button @click="handleAdd" :disabled="disabled" >
      新增
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.list-wrapper {
  width: 100%;
}
.list-item {
  // box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  background-color: #F7F7F7;
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .delete-icon {
    font-size: 14px;
    position: absolute ;
    right: -7px;
    top: -7px;
    color: #ff4b4b;
    cursor: pointer;
  }
}
</style>
