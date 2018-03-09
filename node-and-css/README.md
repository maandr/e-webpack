# Webpack with pure node and javascript

## Prerequisites

Setup from project node.

## Getting Started

### 1. Install a css loader

In order to have webpack manage css-files a css-loader needs to be installed.

```
yarn add --dev style-loader css-loader
````

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