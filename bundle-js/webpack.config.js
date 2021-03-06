const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")

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
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ]
}