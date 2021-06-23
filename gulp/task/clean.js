const gulp        = require('gulp'),
  del             = require('del');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');


/**
 * @description Gulp clean - clean dest folder before build project.
 */
gulp.task('clean', function() {
  return del.sync([
    configPath.dest.root + '/**/*',
    configPath.src.root + '/img/**',
    configPath.src.root + '/media/**',
    configPath.src.root + '/icon/**',
    '!' + configPath.dest.root + '/img',
    '!' + configPath.dest.root + '/img/**/*',
    '!' + configPath.dest.root + '/media',
    '!' + configPath.dest.root + '/media/**/*',
    '!' + configPath.dest.root + '/icon',
    '!' + configPath.dest.root + '/icon/**/*',
    '!' + configPath.src.root + '/img',
    '!' + configPath.src.root + '/icon',
    '!' + configPath.src.root + '/icon/**'
  ]);
});