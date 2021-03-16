module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === 'production'
    ? './docs'
    : './dist',
  productionSourceMap: false,
};
