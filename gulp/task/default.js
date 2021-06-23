const gulp  = require('gulp'),
  runSequence = require('run-sequence');


/**
 * @description Gulp default task - run build => watch => server.
 */
gulp.task("default", function(callback) {
  runSequence(
    ['build'],
    'watch',
    'server',
    callback
  )
});
