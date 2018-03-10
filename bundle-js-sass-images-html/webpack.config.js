const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        "math.app": "./app/app.js",
        "math.lib": "./libs/lib.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js" // [name] will be replace with the key of the corresponding entry
    },
    devServer: {
        contentBase: "./dist"
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new ExtractTextPlugin("app.bundle.css"),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}