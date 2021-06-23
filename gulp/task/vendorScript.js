const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  mainBowerFiles  = require('main-bower-files'),
  concat          = require('gulp-concat'),
  order           = require("gulp-order");


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 * @description Gulp vendor script - concatenation of additional libraries.
 */
gulp.task('vendorScript', function() {

  let files = mainBowerFiles('**/*.js');

  files.push(
    configPath.src.vendorScript + "/*.js",
    "!" + configPath.src.vendorScript + "/*.js",
    configPath.src.vendorScript + "/**/*.js",
    "!" + configPath.src.vendorScript + "/**/_**.js"
  );

  return gulp
    .src(files)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(order([
        'jquery.js',
        'popper.js',
        '*'
      ]))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(configPath.dest.js))
});


/**
 * @description Gulp vendor script watch - keeps track of changes in files.
 */
gulp.task('vendorScript:watch', function() {
  gulp.watch(
    configPath.src.vendorScript + '/**',
    ['vendorScript']
  );
});
