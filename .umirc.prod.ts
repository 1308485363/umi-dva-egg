import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  manifest: {
    fileName: resolve(process.cwd(), './config/manifest.json'),
    publicPath: `/public/`,
  },
  hash: true,
});
