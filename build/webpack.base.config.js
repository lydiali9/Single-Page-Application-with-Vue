const path = require("path"); // This will be our basic webpack configuration file.

// It`s include all of the setting needed for webpack.
// webpack will generate all of the polyfill code necessary and export a file or files for our modules in a distribution dolfer that we can use on our browser.
const config = {
    // this will be our main app file that we will then include other modules, as well.
    entry: {
        app: path.resolve(__dirname, "../src/client-entry.js")
    },
    // It`s will include some rules in the module settings.
    // module: {
    //     rules: [
    //         {
    //             enforce: "pre",
    //             test: /(\.js$)/,
    //             loader: "eslint-loader",
    //             exclude: /node-modules/
    //         }
    //     ]
    // },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "assets/js/[name].js"
    }
};

module.exports = config;
