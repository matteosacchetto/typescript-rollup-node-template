// rollup.config.js
import json from '@rollup/plugin-json';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import run from '@rollup/plugin-run';
import externals from 'rollup-plugin-node-externals'

const preferConst = true; // Use "const" instead of "var"
const isWatched = process.env.ROLLUP_WATCH === 'true'; // `true` if -w option is used

export default {
  input: 'src/app.ts',
  output: {
    dir: 'dist',
    format: 'es',
    generatedCode: {
      constBindings: preferConst,
    },
    preserveModules: true,
    strict: true,
    entryFileNames: '[name].mjs',
  },
  plugins: [
    externals(),
    eslint({
      throwOnError: true,
    }),
    json({
      preferConst: preferConst,
    }),
    typescript(),
    isWatched ? run() : undefined,
  ],
};
