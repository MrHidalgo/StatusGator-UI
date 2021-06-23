argv = require('yargs').argv;

const gulp          = require('gulp'),
  plumber           = require('gulp-plumber'),
	order             = require("gulp-order"),
	concat            = require('gulp-concat'),
	cssMinify         = require('gulp-cssmin'),
	rename            = require('gulp-rename'),
	stripCssComments  = require('gulp-strip-css-comments'),
	uglify          	= require('gulp-uglify'),
  runSequence       = require('run-sequence');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 * @description Gulp prodScript - build and concat source files to prod-ready mode.
 */
gulp.task("prodScript", function() {
	return gulp
		.src('dest/js/**')
		.pipe(plumber(configOption.pipeBreaking.err))
		.pipe(order([
			"vendor.js"
		]))
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(rename(configOption.renameOption))
		.pipe(gulp.dest(configPath.dest.js))
});


/**
 * @description Gulp prodStyle - build and concat source files to prod-ready mode.
 */
gulp.task("prodStyle", function() {
	return gulp
		.src('dest/css/**')
			.pipe(plumber(configOption.pipeBreaking.err))
			.pipe(order([
				"vendor.css"
			]))
			.pipe(concat('bundle.css'))
			.pipe(stripCssComments())
			.pipe(cssMinify(configOption.cssMinOption))
			.pipe(rename(configOption.renameOption))
			.pipe(gulp.dest(configPath.dest.css));
});


/**
 * @description Gulp production - build source files to full optimization.
 */
gulp.task("production", function() {
	runSequence(
		'pug',
    [
			'prodStyle',
			'prodScript'
		]
  );
});
