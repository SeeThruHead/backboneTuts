//Manifest of gulp tasks
var gulp = require('gulp');

module.exports = function(tasks) {
  tasks.forEach(function(name) {
    gulp.task(name, require('./tasks/' + name));
  });
}