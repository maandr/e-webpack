# Webpack with typescript

## Prerequisites

Install Node 8.2+
```
brew install node
```

Install Yarn.
```
brew install yarn
```

Initialize an new node project.
```
yarn init
```

## Getting Started

### 1. Install webpack to your project

First install webpack to our local project.

```bash
yarn add --dev webpack webpack-dev-server webpack-cli
```

### 2. Configure webpack for your project

Next declare a webpack configuration by creating a `webpack.config.js` file in the root of the project directory.

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // [name] will be replace with the key of the corresponding entry
    }
};
```
### 3. Install typescript

Install typescript and a typescript loader to the project.

```bash
yarn add --dev typescript ts-loader
```

### 4. Configure typescript compiler

Next configure the typescript compiler by creating a `tsconfig.json`.

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true
  }
}
```

### 5. Configure webpack to use typescript

Finally configure webpack to use typescript by setting up a `ts-loader` in the `webpack.config.js`.

```js
module.exports = {
    ...
    entry: {
        "math.app": "./app.ts",
        "math.lib": "./lib.ts"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
}
```






