# Webpack with pure node and javascript

## Prerequisites

Setup from project [bundle-js-sass](../bundle-js-sass/README.md)

## Getting Started

### 1. Install a file loader

Install a file loader in order to load files like images.

```
yarn add --dev file-loader
```

### 2. Configure the file loader for images

Next webpack needs to be configured to that it should load all kinds of images.

```js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            use: [
                "file-loader"
            ]
        }]
    },
}
```

### 3. Load images in css

Images can then be referenced in a relative manner in css and the webpack file-loader will take care of replacing each file reference with the path of the bundled file.

```scss
#logo {
  ...
  background-image: url('../images/logo.svg');
  ...
}
```

