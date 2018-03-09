# Webpack with pure node and javascript

## Prerequisites

Setup from project [bundle-js](../bundle-js/README.md)

## Getting Started

### 1. Install a css loader

In order to have webpack manage css-files a css-loader needs to be installed.

```
yarn add --dev style-loader css-loader
```

### 2. Adjust the webpack config to use the css-loader

Next webpack needs to know how to use the css-loader. This is configured by adjusting the `webpack.config.js`.

```js
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
```

### 3. Bundle your css into a separate css-file

Out of the box webpack will bundle all css dependencies into a single `<style>`-tag instead of splitting it into separate files. In order to archive there is a plugin called [extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/). Install this plugin.

```
yarn add --dev extract-text-webpack-plugin
```

*Hint*: Make sure the webpack version is compatible with the used `extract-text-webpack-plugin` version.

### 4. Configure webpack to use the extract-text-webpack-plugin

```js
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin("app.bundle.css")
    ]
}
```