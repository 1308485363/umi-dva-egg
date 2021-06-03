// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogDD = require('../../../app/middleware/logDD');
import ExportUppercase = require('../../../app/middleware/uppercase');

declare module 'egg' {
  interface IMiddleware {
    logDD: typeof ExportLogDD;
    uppercase: typeof ExportUppercase;
  }
}
