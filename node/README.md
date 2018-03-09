# Webpack with pure node and javascript

## Prerequisites

Install Node 8.2+
```
brew install node
```

Install Yarn.
```
brew install yarn
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
### 3. Run webpack manually
Next run webpack with `npx webpack`. The `npx` command, ships with node 8.2+ runs the webpack binary (`./node_modules/.bin/webpack`) of the webpack that has been installed for the project directory in the beginning.

### 4. Integrate webpack into the build process
This command can be automated into a npm script by defining a build script in the `package.json`.

```json
  "scripts": {
    "prebuild": "rm -rf dist",
    "build": "npx webpack"
  }
```

### 5. Build your project using yarn

Now the project can be build using yarn task runner.
```
yarn build
```
Webpack will bundle create two bundles `math.app.bundle.js` and `math.lib.bundle.js` in the `dist` folder from the two defined entry points.

### 6. Use your bundles

The generated bundles can then be used within your web-application by loading them with a `<script>`-tag.

```html
<!doctype html>
<html lang="en">
<head>
  <title>Webpack and node</title>
</head>
<body>
  <script src="dist/math.app.bundle.js"></script>
</body>
</html>
```



