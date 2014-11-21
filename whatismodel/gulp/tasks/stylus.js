var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').stylus,
  options = { compress: config.compress };

if (config.nib) {
  options.use = nib();
  options.import = 'nib';
}

gulp.task('stylus', function () {
  return gulp.src(config.src)
    .pipe(stylus(options))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});