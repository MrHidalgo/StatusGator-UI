const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 * @description Gulp vendor script - concatenation of additional libraries.
 */
gulp.task('vendorFont', function() {

  let files = mainBowerFiles('**/**.{eot,svg,ttf,woff,woff2}');

  files.push(
    configPath.src.vendorScript + "/*.{eot,svg,ttf,woff,woff2}",
    configPath.src.vendorScript + "/**/*.{eot,svg,ttf,woff,woff2}"
  );

  return gulp
    .src(files)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(gulp.dest(configPath.dest.root + '/webfonts'))
});