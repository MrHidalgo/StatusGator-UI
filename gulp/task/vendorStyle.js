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
 * @description Gulp vendor style - concatenation of additional libraries.
 */
gulp.task('vendorStyle', function() {

  let files = mainBowerFiles('**/*.css');

  files.push(
    configPath.src.vendorStyle + "/*.css",
    configPath.src.vendorStyle + "/**/*.css",
    "!" + configPath.src.vendorStyle + "/**/_**.css"
  );


  return gulp
    .src(files)
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(order([
          'normalize.css',
          '*'
      ]))
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(configPath.dest.css))
});


/**
 * @description Gulp vendor style watch - keeps track of changes in files.
 */
gulp.task('vendorStyle:watch', function() {
  gulp.watch(
    configPath.src.vendorStyle + '/**',
    ['vendorStyle', 'vendorFont']
  );
});
