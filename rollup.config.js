import {nodeResolve} from '@rollup/plugin-node-resolve'
import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    json(),
    commonjs(),
    babel({extensions: ['.ts', '.js']}),
    nodeResolve({preferBuiltins: false}),
  ]
}
