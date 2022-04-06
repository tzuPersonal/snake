module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/snake/'
    : '/',
  outputDir: 'docs',
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
};
