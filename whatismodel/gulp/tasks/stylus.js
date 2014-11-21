var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  csso = require('gulp-csso'),
  cmq = require('gulp-combine-media-queries'),
  cache = require('gulp-cached'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').stylus,
  options = { compress: config.compress };

if (config.nib) {
  options.use = nib();
  options.import = 'nib';
}

gulp.task('stylus', function () {
  return gulp.src(config.src)
    .pipe(cache('stylus'))
    .pipe(stylus(options))
    .on('error', handleErrors)
    .pipe(csso())
    .pipe(gulp.dest(config.dest));
});