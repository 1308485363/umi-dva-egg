module.exports = {
  schedule: {
    interval: '1s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
    // immediate: true,
    // cron: '10 0 * * * *',
    env: ['prod'],
  },
  async task(ctx) {
    // console.log('schedule执行:::::::')
    // const res = await ctx.curl('http://www.api.com/cache', {
    //   dataType: 'json',
    // });
    // ctx.app.cache = res.data;
  },
};
