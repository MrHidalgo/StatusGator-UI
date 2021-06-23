const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  changedInPlace  = require('gulp-changed-in-place'),
  tinyPng         = require('gulp-tinypng'),
  webp            = require('gulp-webp'),
  runSequence     = require('run-sequence');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  configPath.src.image + '/**'
];


/**
 * @description Copy image to dest folder, only svg and gif format.
 */
gulp.task("copyImage", function() {
  return gulp
    .src(configPath.src.image + '/*.{gif,svg}')
      .pipe(gulp.dest(configPath.dest.img));
});


/**
 * @description Compress images using TinyPng API.
 */
gulp.task("tinyImage", function() {
  return gulp
    .src(configPath.src.image + '/*.{jpg,jpeg,png}')
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(changedInPlace(configOption.changed))
      .pipe(tinyPng("w2hECd9nCvKWfBj49LZrOPa6Ws7ws8uE"))
      .pipe(gulp.dest(configPath.dest.img));
});


/**
 * @description Create Webp image formats.
 */
gulp.task("createWebpImage", function() {
  return gulp
    .src(configPath.src.image + '/*.{jpg,jpeg,png,tiff}')
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(gulp.dest(configPath.dest.img))
      .pipe(webp())
      .pipe(gulp.dest(configPath.dest.img));
});


/**
 * @description After any change in img folder, run images tasks.
 */
gulp.task("img:build", function() {
  runSequence(
    'copyImage',
    ['tinyImage'],
    // 'createWebpImage'
  );
});


/**
 * @description Gulp image watch - keeps track of changes in files.
 */
gulp.task('img:watch', function() {
  gulp.watch(
    srcPath,
    ['img:build']
  );
});