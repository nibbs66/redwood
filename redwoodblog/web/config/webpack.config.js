/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  const path = require('path');

  module.exports = {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        utils: path.resolve(__dirname, '../../../utils/MyUtilFn'),
      },
    },
  };


  return config
}
