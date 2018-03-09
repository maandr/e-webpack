const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        "math.app": "./app.js",
        "math.lib": "./lib.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js" // [name] will be replace with the key of the corresponding entry
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/, // find .css and .scss
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.bundle.css")
    ]
}