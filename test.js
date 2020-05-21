module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('png')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('file-loader')
      .loader('file-loader')
      .end();
  },
};
