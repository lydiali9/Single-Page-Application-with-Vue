# Single-Page-Application-with-Vue

The devDependencies are all of the modules that we`ll need while in development. and in the dependencies, we can include all the modules necessary for development and production.

1. If you run 'npm server', and open the url in the browser,
2. Webpack is not only a module bundler, but through webpack plugins, We can minify, transpile, and run many other build processes that we would usually run through gulp or custom npm scripts.
3. ``node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js``
once we`ve run this, we can see that the dist foler was created with
the app.js file generated.
4. Install webpack-dev-middleware webpack-hot-middleware, For webpack-dev-middleware if every time we make a change, it will rebuild the module that was updated.
Also, with the webpack-hot-middleware, every time we make an update, it will reload that section that changed in our browser.
5. ``editorconfig`` file for some rules to be applied, it would be nice to have a more thorought process to automatically check for common Javascript mistakes and styling issues, while building code, This is where linting is helpful.
6. The ``ExtractTextPlugin`` accepts the file in which we want to save our styles in. lastly, I`ll have to uinclude one more option in my Vue loader options.
7. If we use the a tag and click on the logo, this will reload the page completely. Since this is a single page application, we would like to have the oppertunity when loading a new page, to load only the component that is linked to the according path in the router view. This can be done through the router link reserved element.
8. ``exact`` the to path has to be an exact match.
```javascript
scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
        return savedPosition
    }
}

// if the link has a hash parameter, we could return with the hash selector to scroll to the element with an id of the hash value.
scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
        return {
            selector: to.hash
        }
    }
}
```
9. Vuex which is build to help us with state management using a Flux-like pattern.
10. Client-side rendering is easy, You can generate the static HTML and JavaScript files, and you`re ready to go. Server-side rendering is more complicated, as you have to write a Node.js script that generates the end result, and run Node.js on your server. Second, client-side rendering has SEO
issues as we load data and many components asynchronously, although with server-side, we load the end result, making it easy for bots to parse our pages, Third potint is that with client-side rendering, we progressively render the page, which may be good in some cases.
