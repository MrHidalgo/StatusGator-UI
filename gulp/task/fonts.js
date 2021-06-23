const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');



/**
 * @description Gulp fonts - copy fonts to the dest folder.
 */
gulp.task('fonts', function() {
  return gulp
    .src(configPath.src.fonts + '/**.*')
      .pipe(gulp.dest(configPath.dest.fonts));
});


/**
 * @description Gulp fonts watch - keeps track of changes in files.
 */
gulp.task('fonts:watch', function() {
  gulp.watch(
    configPath.src.fonts + '/**',
    ['fonts']
  );
});
