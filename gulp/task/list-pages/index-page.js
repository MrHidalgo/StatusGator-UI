const gulp    = require('gulp'),
  consolidate = require('gulp-consolidate'),
  yaml        = require('require-yaml');

const configPath  = require('../../config/configPath');

gulp.task('list-pages', function() {
	delete require.cache[require.resolve('../../../src/index.yaml')];

  let pages = require('../../../src/index.yaml');

  return gulp
    .src(__dirname + '/listPages.html')
    .pipe(consolidate('lodash', {
      pages: pages
    }))
    .pipe(gulp.dest(configPath.dest.root));
});

gulp.task('list-pages:watch', function() {
  gulp.watch('src/index.yaml', ['list-pages']);
});
