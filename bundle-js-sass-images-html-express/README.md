# Webpack with express server

## Prerequisites

Setup from project [bundle-js-sass-images-html](../bundle-js-sass-images-html/README.md)

## Getting Started

### 1. Install express and webpack HMR modules

```
yarn add --dev express webpack-hot-middleware
```

### 2. Create a express server script

Next create a express server that will serve our bundled web application and enable hot module replacement using the `webpack-dev-middleware` and `webpack-hot-middleware` packages.

```js
const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const config = require("./webpack.config.js")

const isDevelopmentMode = process.env.NODE_ENV !== "production"
const port = 3000
const app = express()

if(isDevelopmentMode) {
    // configure express app to use webpack middleware
    const compiler = webpack(config)
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
          colors: true,
          hash: false,
          timings: true,
          chunks: false,
          chunkModules: false,
          modules: false
        }
    })
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get("*", function(request, response) {
        response.write(middleware.fileSystem.readFileSync(path.join(__dirname, "dist/index.html")))
    })
} else {
    app.use(express.static(__dirname + "/dist"))
    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "dist/index.html"))
    })
}

app.listen(port, function(error) {
    if(error) {
        console.error(error)
    } else {
        console.info("Listening on port %s. Open up http://localhost:%s/ in your browser", port, port)
    }
})
```

### 3. Configure webpack to use express and HMR

Next configure webpack to use hot module replacement and specify a public path that will be used by express to start serving contents.

```js
const webpack = require("webpack")

module.exports = {
    ...
    output: {
        ...
        publicPath: "/"
    },
    plugins: [
        ...
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

### 4. Create some start scripts

Finally create some start scripts in the `package.json` for convenience.

```json
  "scripts": {
    ...
    "prestart": "yarn build",
    "start": "cross-env NODE_ENV=production node server.js",
    "dev": "cross-env NODE_ENV=development node server.js"
  }
```
