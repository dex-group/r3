const path = require('path')

module.exports = ({
  stage,
  loaders,
  actions
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /scroll-out/,
          use: loaders.null(),
        }, ],
      },
    })
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../src/components/'),
        '@styles': path.resolve(__dirname, '../src/styles/'),
        '@utils': path.resolve(__dirname, '../src/utils/'),
      },
    },
  })
}