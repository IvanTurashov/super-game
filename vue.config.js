/* eslint-disable no-param-reassign */
module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === 'production'
    ? './docs'
    : './dist',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('preload').tap((options) => {
      options[0].as = (entry) => {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        if (/\.mp3$/.test(entry)) return 'audio';
        return 'script';
      };
      options[0].include = 'allAssets';
      return options;
    });
  },
};
