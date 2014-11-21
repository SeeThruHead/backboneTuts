var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  gulpif = require('gulp-if'),
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
  console.log(JSON.stringify(options));
  return gulp.src(config.src)
    .pipe(cache('stylus'))
    .pipe(stylus({compress: false}))
    .on('error', handleErrors)
    .pipe(gulpif(config.csso, csso()))
    .pipe(gulp.dest(config.dest));
});