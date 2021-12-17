import { defineConfig } from 'umi';
import { resolve } from 'path';
const { name } = require(resolve('package.json'));

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [
    // require.resolve('./src/plugins/umi-plugin-monitor-error.ts')
  ],
  dva: {
    hmr: true,
  },
  outputPath: './app/public/',
  base: name,
  devtool: 'source-map',
  // mainPath:'/login'
});
