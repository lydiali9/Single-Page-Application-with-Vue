const webpack = require("webpack");
const clientConfig = require("./webpack.client.config");

// The function will receive the Express app,
module.exports = function setupDevServer(app) {
    // To add a new entry point, This will be named webpack-hot-middleware/client into the entry areas.
    // This script added will connect to the receive notifications when the bundler rebuilds, and update the client bundle accordingly.
    clientConfig.entry.app = ["webpack-hot-middleware/client", clientConfig.entry.app]

    // To push two new plugins that are needed for the hot-middleware to work.
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
    // dev server is running
    const clientCompiler = webpack(clientConfig);
    app.use(
        require('webpack-dev-middleware')(clientCompiler, {
            stats: {
                colors: true
            }
        } )
    )
    app.use(require('webpack-hot-middleware')(clientCompiler))
}
