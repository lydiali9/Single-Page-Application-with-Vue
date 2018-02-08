const base = require("./webpack.base.config")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// To include the base config, then will Extend the base config object by using Object.assign method and include the property named plugins.
const config = Object.assign({}, base, {
    plugins: base.plugins || []
})

config.module.rules
                .filter(x => { return x.loader == 'vue-loader' })
                .forEach(x => x.options.extractCSS = true )

config.plugins.push(
    new ExtractTextPlugin('assets/styles.css')
)

module.exports = config
