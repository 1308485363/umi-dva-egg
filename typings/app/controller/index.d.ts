// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportNew = require('../../../app/controller/new');
import ExportSearch = require('../../../app/controller/search');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    new: ExportNew;
    search: ExportSearch;
    user: ExportUser;
  }
}
