var dest = './build',
     src = './src';

module.exports = {
  stylus : {
    src: src + '/stylus/*.styl',
    dest: dest,
    nib: true,
    compress: false,
    csso: true
  }
};