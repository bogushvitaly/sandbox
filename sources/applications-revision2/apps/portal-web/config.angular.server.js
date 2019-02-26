const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        SERVERLESS_ENVIRONMENT: JSON.stringify(process.env.FUNCTION_NAME),
        CI_ENVIRONMENT: JSON.stringify(process.env.GITLAB_CI),
        PORTAL_WEB_HOST: JSON.stringify(process.env.PORTAL_WEB_HOST),
        PORTAL_WEB_PORT: JSON.stringify(process.env.PORTAL_WEB_PORT),
        PORTAL_WEB_NAME: JSON.stringify(process.env.PORTAL_WEB_NAME)
      }
    })
  ]
};
