<script setup>
import useFormDesign from '../../../store/index';
import ApiGlobalConfig from './ApiGlobalConfig/index.vue';
import { ref } from 'vue';
import { Warning } from '@element-plus/icons-vue';
import EventListWrapper from '../../EventConfig/EventList/wrapper.vue';
import StatusListWrapper from '../../EventConfig/StatusList/wrapper.vue';

const store = useFormDesign();
const apiDialogVisible = ref(false);

function handleApiConfigData(data) {
  store.formConfig = data;
}

const eventDialogVisible = ref(false);

const statusDialogVisible = ref(false);
</script>

<template>
  <el-form label-position="top" style="padding: 0 16px;">
    <el-form-item label="标签位置">
      <el-radio-group v-model="store.formConfig.labelPosition">
        <el-radio label="靠右" value="right" />
        <el-radio label="靠左" value="left" />
        <el-radio label="靠上" value="top" />
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="store.formConfig.labelPosition !== 'top'" label="标签宽度">
      <el-input v-model="store.formConfig.labelWidth" placeholder="请输入标签宽度" />
    </el-form-item>
    <el-form-item label="必填星号的位置">
      <el-radio-group v-model="store.formConfig.requireAsteriskPosition">
        <el-radio label="左侧" value="left" />
        <el-radio label="右侧" value="right" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用" for="null">
      <el-switch v-model="store.formConfig.disabled" />
    </el-form-item>
    <el-form-item label="接口全局配置">
      <template #label>
        接口全局配置
        <el-tooltip
          effect="dark"
          content="配置数据源请求的域名以及签名key"
          placement="top"
        >
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </template>
      <el-button style="width: 100%;" @click="apiDialogVisible = true">
        配置
      </el-button>
    </el-form-item>
    <el-form-item label="事件">
      <template #label>
        事件
        <el-tooltip
          effect="dark"
          content="配置表单所需事件"
          placement="top"
        >
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </template>
      <el-button style="width: 100%;" @click="eventDialogVisible = true">
        配置
      </el-button>
    </el-form-item>
    <el-form-item label="数据源">
      <template #label>
        数据源
        <el-tooltip
          effect="dark"
          content="配置表单所需数据源"
          placement="top"
        >
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </template>
      <el-button style="width: 100%;" @click="statusDialogVisible = true">
        配置
      </el-button>
    </el-form-item>
    <el-form-item label="节点数据是否存储在节点上" for="null">
      <el-switch v-model="store.formConfig.isSaveDataToNode" />
    </el-form-item>
    <el-form-item label="是否以弹框形式展示表单" for="null">
      <template #label>
        是否以弹框形式展示表单
        <el-tooltip
          effect="dark"
          content="开启后默认展示配置按钮，点击后弹框展示该表单"
          placement="top"
        >
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </template>
      <el-switch v-model="store.formConfig.showFormByModal" />
    </el-form-item>
    <ApiGlobalConfig v-model="apiDialogVisible" :detail="store.formConfig" @confirm="handleApiConfigData" />
    <EventListWrapper v-model="eventDialogVisible" />
    <StatusListWrapper v-model="statusDialogVisible" />
  </el-form>
</template>

<style lang="scss" scoped>
</style>
