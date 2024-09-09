import * as rollup from 'rollup';
import { Options } from './types.cjs';
import 'markdown-it';
import '@mdit-vue/plugin-component';
import '@mdit-vue/plugin-frontmatter';
import '@mdit-vue/types';
import '@rollup/pluginutils';

declare const _default: (options: Options) => rollup.Plugin<any> | rollup.Plugin<any>[];

export { _default as default };
