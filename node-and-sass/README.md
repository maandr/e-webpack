# Webpack with pure node and javascript

## Prerequisites

Setup from project node-and-css.

## Getting Started

### 1. Install a sass loader

Install a sass loader in order to preprocess css-files with sass.

```
yarn add --dev sass-loader node-sass
```

### 2. Configure and chain the sass-loader with the css- and style-loader

Next webpack needs to be configured to that it should load the `sass`-files and compile it trough the sass-preprocessor to `css`. To this is archived by chaining the `css-loader`, `sass-loader` and `style-loader` together in the `webpack.config.js`.

```js
module.exports = {
    ...
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
```

