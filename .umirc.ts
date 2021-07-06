import { defineConfig } from 'umi';
import { resolve } from 'path';
const { name } = require(resolve('package.json'));

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  ssr: {
    // devServerRender: true
  },
  dva: {},
  // proxy: {
  //   '/api': {
  //     'target': 'http://127.0.0.1:10241/',
  //     'changeOrigin': true,
  //   },
  // },

  plugins: [],
  outputPath: './app/public/',
  base: name,
});
