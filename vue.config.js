module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === 'gh-pages'
    ? './docs'
    : './dist',
};
