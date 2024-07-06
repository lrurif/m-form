import 'monaco-editor/esm/vs/editor/editor.all.js';

import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';

import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as monaco from 'monaco-editor';

export { monaco };

// // 全局导入
// import * as monaco from 'monaco-editor'

// // 局部导入需要的功能和依赖
// import * as monaco from 'monaco-editor/esm/vs/editor/edcore.main'
// import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution'
