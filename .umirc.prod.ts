import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  manifest: {
    fileName: resolve(process.cwd(), './config/manifest.json'),
    publicPath: `http://127.0.0.1:10441/app/public/`,
  },
  hash: true,
});
