# Single-Page-Application-with-Vue

The devDependencies are all of the modules that we`ll need while in development. and in the dependencies, we can include all the modules necessary for development and production.

1. If you run 'npm server', and open the url in the browser,
2. Webpack is not only a module bundler, but through webpack plugins, We can minify, transpile, and run many other build processes that we would usually run through gulp or custom npm scripts.
3. ``node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js``
once we`ve run this, we can see that the dist foler was created with
the app.js file generated.
4. Install webpack-dev-middleware webpack-hot-middleware, For webpack-dev-middleware if every time we make a change, it will rebuild the module that was updated.
Also, with the webpack-hot-middleware, every time we make an update, it will reload that section that changed in our browser.
