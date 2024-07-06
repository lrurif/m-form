<script setup>
import useFormDesign from '../../../store/index';
import { nextTick, ref, watch } from 'vue';

const store = useFormDesign();

const treeRef = ref(null);
watch(() => store.currentComData, (val) => {
  nextTick(() => {
    if (!val) {
      return;
    }
    treeRef.value.setCurrentKey(val?.uuid);
  });
}, {
  immediate: true,
});

function handleNodeClick(data) {
  store.setCurrentComData(data);
}
</script>

<template>
  <el-tree ref="treeRef" :data="store.dataSource" class="com-tree-wrapper" node-key="uuid" highlight-current @node-click="handleNodeClick">
    <template #default="{ data }">
      <div class="node-item" :class="[data.uuid === store.currentComData?.uuid] ? 'active' : ''">
        <span>{{ data.name }}</span>
      </div>
    </template>
  </el-tree>
</template>

<style lang="scss" scoped>
.com-tree-wrapper {
  ::v-deep(.el-tree-node.is-current ) {
    &>.el-tree-node__content {
      color: #fff;
    background-color: #FF6B13;
    }

  }
}
</style>
