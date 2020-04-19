const fs = require('fs');
const path = require('path');

function includeWorkspaces(config) {
  function getDerictoris(source) {
    return fs.readdirSync(source).map(folder => fs.realpathSync(path.join(source, folder)));
  }

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: getDerictoris(path.resolve(__dirname, '../../node_modules/@ui-kit')),
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-react-app'],
      },
    },
  });
}

module.exports = function override(config) {
  includeWorkspaces(config);
  return config;
};
