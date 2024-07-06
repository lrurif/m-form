<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { monaco } from '../../utils/monaco';

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';


defineOptions({
  name: 'CodeEditor',
});
const props = defineProps({
  language: {
    type: String,
    default: 'javascript',
  },
  config: {
    type: Object,
    default: () => ({}),
  },
});
setupLanguageFeatures(LanguageIdEnum.MYSQL, {
  completionItems: {
    enable: true,
    triggerCharacters: [' ', '.'],
  },
});
const model = defineModel();

const editorRef = ref(null);

let editor = null;

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker();
    }
    if (label === 'json') {
      return new JsonWorker();
    }
    return new EditorWorker();
  },
};

onMounted(() => {
  editorInit();
});

onBeforeUnmount(() => {
  editor.dispose();
});

function editorInit() {
  nextTick(() => {
    editor = monaco.editor.create(editorRef.value, {
      value: model.value || '', // 编辑器初始显示文字
      language: props.language, // 语言
      theme: 'vs-dark', // 主题
      fontSize: 14, // 字体大小
      folding: true, // 是否折叠
      foldingHighlight: true, // 折叠等高线
      foldingStrategy: 'indentation', // 折叠方式  auto | indentation
      showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
      disableLayerHinting: true, // 等宽优化
      emptySelectionClipboard: false, // 空选择剪切板
      selectionClipboard: false, // 选择剪切板
      automaticLayout: true, // 自动布局
      codeLens: false, // 代码镜头
      scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
      colorDecorators: true, // 颜色装饰器
      accessibilitySupport: 'auto', // 辅助功能支持  "auto" | "off" | "on"
      lineNumbers: 'on', // 行号 取值： "on" | "off" | "relative" | "interval" | function
      lineNumbersMinChars: 5, // 行号最小字符   number
      enableSplitViewResizing: false,
      readOnly: false, // 是否只读  取值 true | false
      wordWrap: 'off', // 自动换行
      tabSize: 2, // tab 大小
      insertSpaces: true, // 使用空格替代 tab
      ...props.config,
    });
    // console.log(editor)
    // 监听值的变化
    editor.onDidChangeModelContent(() => {
      model.value = editor.getValue();
    });
  });
}
function setValue(val) {
  editor && editor?.setValue(val);
}

function getValue() {
  const value = editor?.getValue()?.trim() || null;
  return value;
}
defineExpose({
  setValue,
  getValue,
});
</script>

<template>
  <div ref="editorRef" class="codeEditorBox" />
</template>

<style scoped lang="scss">
.codeEditorBox {
  width: 100%;
}
</style>
