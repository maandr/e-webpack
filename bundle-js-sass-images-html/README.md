# Webpack with pure node and javascript

## Prerequisites

Setup from project [bundle-js-sass](../bundle-js-sass/README.md)

## Getting Started

### 1. Install a file loader

Install a the `html-webpack-plugin` in order to have webpack manage html.

```
yarn add --dev html-webpack-plugin
```

### 2. Configure webpack to use html-webpack-plugin

Next configure webpack to use the `html-webpack-plugin` by adding it to the plugins section of the `webpack.config.js`.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    ...
    plugins: [
        new ExtractTextPlugin("app.bundle.css"),
        new HtmlWebpackPlugin({
            template: "index.html" // template-file to generate html from
        })
    ]
}
```

### 3. Configure webpack-dev-server

Webpack brings it's own dev-server that is able to watch a specified directory and refresh the browser each time a watched file changes.

It can be configured in the `webpack.config.js`.

```js
module.exports = {
    ...
    devServer: {
        contentBase: "./dist"
    }
}
```

Next adjust the `start` script in the `package.json` to launch the webpack-dev-server.

```json
  "scripts": {
    "start": "npx webpack-dev-server --open"
  }
```