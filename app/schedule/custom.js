// app/schedule/custom.js
module.exports = (app) => {
  const rotator = getRotator(app);
  return {
    // https://github.com/eggjs/egg-schedule
    schedule: {
      type: 'worker', // only one worker run this task
      cron: '10 * * * *', // custom cron, or use interval
    },
    async task() {
      await rotator.rotate();
    },
  };
};

function getRotator(app) {
  class CustomRotator extends app.LogRotator {
    // return map that contains a pair of srcPath and targetPath
    // LogRotator will rename ksrcPath to targetPath
    async getRotateFiles() {
      const files = new Map();
      const srcPath = '/logs/fontendErr.log';
      const targetPath = '/logs/fontendErr.log.2016.09.30';
      files.set(srcPath, { srcPath, targetPath });
      return files;
    }
  }
  return new CustomRotator({ app });
}
