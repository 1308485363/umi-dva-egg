import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  manifest: {
    fileName: resolve(process.cwd(), './config/manifest.json'),
    publicPath: `http://47.92.73.227:10441`,
  },
  hash: true,
});
