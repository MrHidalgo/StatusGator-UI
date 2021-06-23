const gulp        =   require('gulp'),
  plumber         =   require('gulp-plumber'),
  spriteSmith     =   require('gulp.spritesmith'),
  imageMinify     =   require('gulp-imagemin'),
  buffer          =   require('vinyl-buffer'),
  merge           =   require('merge-stream');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {{"0": *[], "1": *[]}}
 */
const srcPath = {
  0: [
    configPath.src.icon + '/*.png'
  ],
  1: [
    configPath.src.icon + '/**'
  ]
};


/**
 * @description Gulp sprite SVG - generated PNG sprite.
 */
gulp.task('spritePNG', function() {

  /**
   *
   * @type {string}
   */
  const spImgPath     = '../img/sprite.png',
    retinaspImgPath   = '../img/sprite@2x.png',
    destImg           = './dest/img/',
    destCss           = './src/scss/_generated/';


  /**
   *
   * @type {NodeJS.WritableStream | *}
   */
  let spriteData = gulp
    .src(srcPath[0])
      .pipe(plumber(configOption.pipeBreaking.err))
      .pipe(spriteSmith(
        {
          imgName         : 'sprite.png',
          imgPath         : spImgPath,
          retinaImgPath   : retinaspImgPath,
          cssName         : '_spritePNG.scss',
          cssTemplate     : './src/scss/_generated/handlebarsStr.css.handlebars',
          retinaSrcFilter : [
            './src/icon/*@2x.png'
          ],
          retinaImgName   : 'sprite@2x.png',
          algorithm       : 'binary-tree',
          padding         : 5
        }
      ));


  /**
   *
   * @type {NodeJS.ReadWriteStream | *}
   */
  let imgStream = spriteData
    .img
    .pipe(buffer())
    .pipe(imageMinify({
			interlaced: true
    }))
    .pipe(gulp.dest(destImg));


  /**
   *
   * @type {NodeJS.ReadWriteStream | *}
   */
  let cssStream = spriteData
    .css
    .pipe(gulp.dest(destCss));


  return merge(imgStream, cssStream)
});


/**
 * @description Gulp sprite PNG watch - keeps track of changes in files.
 */
gulp.task('spritePNG:watch', function() {
  gulp.watch(
    srcPath[1],
    ['spritePNG']
  );
});
