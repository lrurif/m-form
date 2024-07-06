<script setup>
import wrapper from '../../components/wrapper/index.vue';
import { Delete } from '@element-plus/icons-vue';
import { inject } from 'vue';

defineOptions({
  name: 'VoeContainer',
});

const props = defineProps({
  setApis: Object,
  dataSource: Object,
  loopData: Object,
  index: Number,
  loopOriginData: Array,
});

const store = inject("store")

const formType = inject('formType');

function setCurrent(data) {
  if (formType === '1') {
    store.setCurrentComData(data);
  }
}

function handleDelete(index) {
  const data = props.dataSource.children[index];
  if (store.currentComData.uuid === data.uuid) {
    store.setCurrentComData(null);
  }
/* eslint-disable */
  props.dataSource.children.splice(index, 1);
}

function handleMouseover(id) {
  store.currentMouseoverId = id;
}
function handleMouseout() {
  store.currentMouseoverId = '';
}
</script>

<template>
  <el-row
    v-bind="setApis.attrs" :style="{
      padding: formType === '1' ? '4px' : null,
    }"
  >
    <wrapper :loop-data="loopData" :index="index" :loop-origin-data="loopOriginData" v-for="(item, _index) in dataSource.children" :key="item.uuid" :class="[formType === '1' ? (store.currentComData && store.currentComData.uuid === item.uuid) ? 'active' : 'normal' : null, store.currentMouseoverId === item.uuid ? 'hover' : '']" com-name="VoeCol" :data-source="item" @click.native.stop="setCurrent(item)" @mouseover.stop.native="handleMouseover(item.uuid)"
        @mouseout.stop.native="handleMouseout">
      <div v-if="formType === '1' && (store.currentComData && store.currentComData.uuid === item.uuid)" class="operate-btns">
        <el-icon @click.stop="handleDelete(_index)">
          <Delete />
        </el-icon>
      </div>
    </wrapper>
  </el-row>
</template>

<style lang="scss" scoped>
.active {
  border: 2px solid var(--el-color-primary);
  position: relative;
  background-color: #fff;
  z-index: 11;
}
.normal {
  border: 1px dashed #ddd;
  z-index: 11;
  background-color: #fff;
  &.hover {
    border-color: var(--el-color-primary);
  }
}

.operate-btns {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 107, 19, .7);
    color: #fff;
    z-index: 12;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    cursor: auto;
    .el-icon {
      cursor: pointer;
    }
    &:hover {
      background-color: rgba(255, 107, 19, .9);

    }
  }
</style>
