<script setup>
import Header from './Header/index.vue';
import { FormCreate }  from '@m-form/form-render';
import useFormDesign from '../../store/index';
import { provide } from 'vue';

const store = useFormDesign();
provide("store", store)

</script>

<template>
  <div class="content-wrapper">
    <Header />
    <div class="drag-area">
      <FormCreate
        v-model:dataSource="store.dataSource" form-type="1" :form-setting="store.formConfig"
        :event-map="store.methods" :status-map="store.statusMap"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    .drag-area {
        flex: 1;
        min-height: 0;
        background-color: rgb(245, 245, 245);
        padding: 20px;
    }
}
</style>
