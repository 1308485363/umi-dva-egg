// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrinfo = require('../../../app/controller/errinfo');
import ExportFrontendErrInfo = require('../../../app/controller/frontendErrInfo');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportNew = require('../../../app/controller/new');
import ExportSearch = require('../../../app/controller/search');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    errinfo: ExportErrinfo;
    frontendErrInfo: ExportFrontendErrInfo;
    home: ExportHome;
    login: ExportLogin;
    new: ExportNew;
    search: ExportSearch;
    user: ExportUser;
  }
}
