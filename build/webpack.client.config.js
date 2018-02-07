const base = require("./webpack.base.config")

// To include the base config, then will Extend the base config object by using Object.assign method and include the property named plugins.
const config = Object.assign({}, base, {
    plugins: base.plugins || []
})

module.exports = config
