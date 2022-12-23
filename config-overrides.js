const {
    override,
    addWebpackAlias,
    fixBabelImports
  } = require('customize-cra');
  const path = require('path');
  
  module.exports = override(
    (config) => {
      config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
      return config;
    },
    // @别名
    addWebpackAlias({
      '@': path.join(__dirname, './src'),
    }),
  );
  