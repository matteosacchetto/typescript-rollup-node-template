// rollup.config.js
import json from '@rollup/plugin-json';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import run from '@rollup/plugin-run';

// Import dependencies
import { dependencies } from "./package.json"

const preferConst = true; // Use "const" instead of "var"
const isWatched = process.env.ROLLUP_WATCH === 'true'; // `true` if -w option is used

export default {
  external: dependencies ? [...Object.keys(dependencies)] : [],
  input: 'src/app.ts',
  output: {
    dir: 'dist',
    format: 'es',
    preferConst: preferConst,
    preserveModules: true,
    strict: true,
    entryFileNames: "[name].mjs"
  },
  plugins: [
    json({
      preferConst: preferConst
    }),
    eslint({
      throwOnError: true
    }),
    typescript(), 
    isWatched ? run() : undefined
  ]
};
