const gulp      = require('gulp'),
	iconfont      = require('gulp-iconfont'),
	iconfontCss   = require('gulp-iconfont-css'),
	runTimestamp  = Math.round(Date.now()/1000);


/**
 *
 * @type {string}
 */
const fontName = 'iconFont';


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');


/**
 *
 * @type {*[]}
 */
const srcPath = [
	configPath.src.iconFonts + '/*.svg'
];


/**
 * @description Gulp iconfont - Create fonts from several SVG icons.
 */
gulp.task('iconfont', function(){
	return gulp.src(srcPath)
		.pipe(iconfontCss({
			fontName: fontName,
			path: 'src/scss/_generated/_iconFont_template.scss',
			targetPath: '../scss/_generated/_spriteFont.scss',
			fontPath: '../fonts/'
		}))
		.pipe(iconfont({
			fontName: fontName,
			formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
			normalize: true,
			fontHeight: 1000,
			timestamp: runTimestamp
		}))
		.pipe(gulp.dest(configPath.src.fonts));
});


/**
 * @description Gulp iconfont watch - keeps track of changes in files.
 */
gulp.task('iconfont:watch', function() {
	gulp.watch(
		configPath.src.iconFonts + '/**',
		['iconfont']
	);
});