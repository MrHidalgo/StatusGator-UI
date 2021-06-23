const gulp        = require('gulp'),
  server          = require('browser-sync').create();


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');


/**
 * @description Gulp server - create and init Browser-sync.
 */
gulp.task('server', function() {
  server.init({
    server: {
      baseDir: configPath.dest.root,
      directory: false,
      serveStaticOptions: {
        extensions: [
          'html'
        ]
      }
    },
    files: [
      configPath.dest.html + '/*.html',
      configPath.dest.css + '/*.css',
      configPath.dest.js + '/*.js',
      configPath.dest.icon + '/**',
      configPath.dest.img + '/**'
    ],
		startPath: "/listPages.html",
    port: 3000,
    logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
    logConnections: false,
    logFileChanges: true,
    open: true,
    notify: false,
    ghostMode: false,
    online: true,
    tunnel: false
  });
});
