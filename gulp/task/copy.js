const gulp        = require('gulp');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath');



/**
 * @description Gulp copy - copy media or other files to the dest folder.
 */
gulp.task('copy', function() {
  return gulp
    .src(configPath.src.media + '/**.*')
      .pipe(gulp.dest(configPath.dest.media));
});


/**
 * @description Gulp copy watch - keeps track of changes in files.
 */
gulp.task('copy:watch', function() {
  gulp.watch(
    configPath.src.media + '/**',
    ['copy']
  );
});
