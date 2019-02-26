const webpack = require("webpack");
const ContentInjectionPlugin = require(`${process.cwd()}/tools/build-extension/index-inject.plugin`);

module.exports = {
  node: {
    path: true,
    crypto: true,
    stream: true,
    tty: "empty",
    fs: "empty",
    os: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GA_TRACKING_CODE: JSON.stringify(process.env.GA_TRACKING_CODE),
        GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
        PORTAL_API_URL: JSON.stringify(process.env.APPLICATION_API_URL),
        PORTAL_STATIC_URL: JSON.stringify(process.env.STATIC_CONTENT_SERVER_URL)
      }
    })
  ]
};
