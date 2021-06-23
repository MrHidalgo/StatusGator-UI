const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  svgSprite       = require('gulp-svg-sprite'),
  svgMinify       = require('gulp-svgmin'),
  cheerio         = require('gulp-cheerio'),
  replace         = require('gulp-replace');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {{"0": *[], sprite: string, destSpriteSCSS: string, templateSCSS: string}}
 */
const srcPath = {
  0: [
    configPath.src.icon + '/*.svg'
  ],
  "sprite" : "../sprite.svg",
  "destSpriteSCSS" : "../../../src/scss/_generated/_spriteSVG.scss",
  "templateSCSS" : "./src/scss/_generated/_spriteSVG_template.scss"
};


/**
 * @description Gulp sprite SVG - generated SVG sprite.
 */
gulp.task('spriteSVG', function () {
  return gulp
    .src(srcPath[0])
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(svgMinify(configOption.svgMin))
      .pipe(cheerio({
        run: function ($) {
          // $('[fill]').removeAttr('fill');
          // $('[stroke]').removeAttr('stroke');
          // $('[style]').removeAttr('style');
          $('[title]').removeAttr('title');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: srcPath["sprite"],
            render: {
              scss: {
                dest: srcPath["destSpriteSCSS"],
                template: srcPath["templateSCSS"]
              }
            },
            example: false,
          }
        }
      }))
      .pipe(gulp.dest(configPath.dest.img));
});


/**
 * @description Gulp sprite SVG watch - keeps track of changes in files.
 */
gulp.task('spriteSVG:watch', function() {
  gulp.watch(
    srcPath[0],
    ['spriteSVG']
  );
});
