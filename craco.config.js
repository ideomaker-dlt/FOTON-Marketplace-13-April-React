const CracoAlias = require('craco-alias')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        }
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
