# Prerequisites

Install Yarn.
```
brew install yarn
```

# Integrate webpack into the build process

First install webpack to our local project.
```
yarn add --dev webpack webpack-dev-server webpack-cli
```

Next declare a webpack configuration by creating a `webpack.config.js` file in the root of the project directory.

```
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

Next run webpack with `npx webpack`. The `npx` command, ships with node 8.2+ runs the webpack binary (`./node_modules/.bin/webpack`) of the webpack that has been installed for the project directory in the beginning.

This command can be automated into a npm script by defining a build script in the `package.json`.

```
  "scripts": {
    "build": "npx webpack"
  }
```

