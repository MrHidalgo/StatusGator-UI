const gulp          = require('gulp'),
  plumber           = require('gulp-plumber'),
  prefixer          = require('gulp-autoprefixer'),
  scss              = require('gulp-sass'),
  sourcemaps        = require('gulp-sourcemaps'),
  changedInPlace    = require('gulp-changed-in-place');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath    = require('../config/configPath'),
  configOption      = require('../config/configOption');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    configPath.src.scss + '/*.scss'
  ],
  1: [
    configPath.src.scss + '/**'
  ]
};


/**
 * @description Gulp SCSS - preprocessor for creating style files.
 */
gulp.task('scss', function() {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(sourcemaps.init())
      .pipe(scss(configOption.sassAPI).on('error', scss.logError))
      .pipe(prefixer(configOption.autoPrefixOptions))
      .pipe(changedInPlace(configOption.changed))
      .pipe(sourcemaps.write('./maps', configOption.sourceMapStyle))
      .pipe(gulp.dest(configPath.dest.css))
});


/**
 * @description Gulp SCSS watch - keeps track of changes in files.
 */
gulp.task('scss:watch', function() {
  gulp.watch(
    configPath.src.scss + '/**',
    ['scss']
  );
});
