const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    fileRotatory: {
      type: 'dateFile', filename: './log/serverlogs.log', pattern: '.yyyy-MM-dd', keepFileExt: true, numBackups: 30, maxLogSize: 10485760,
    },
  },
  categories: {
    forConsole: { appenders: ['console'], level: 'trace' },
    default: { appenders: ['fileRotatory', 'console'], level: 'trace' },
  },
});
const getLogger = log4js.getLogger();
module.exports = getLogger;