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