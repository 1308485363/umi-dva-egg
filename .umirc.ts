import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  ssr: {
    // devServerRender: true
  },
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:10241/',
      'changeOrigin': true,
    },
  },
});
