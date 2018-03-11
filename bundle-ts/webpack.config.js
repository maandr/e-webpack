const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        "math.app": "./app.ts",
        "math.lib": "./lib.ts"
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js" // [name] will be replace with the key of the corresponding entry
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ]
}