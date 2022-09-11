# Products SubApp

Is built using JavaScript, Html, Css, faker, Webpack
npm install
npm start

## webpack.config.js

dev server is initialized on port 8081.
ModuleFedrationPlugin exposes "./src/bootstrap" through products remoteEntry.js file.
faker is declaired as singleton shared module, and in container if one or more subApps are using same module then only one instance will be loaded.

## src/utils/mockContext.js

If products subApp is run independently, then this mocked context will be used to enable functionalities on local.

## src/index.js

Is dynamically importing bootstrap.js to allow webpack's ModuleFedrationPlugin to request dependencies asynchronously.

## src/bootstrap.js

mount function is exposed to opther repos through ModuleFedrationPlugin.
mount function accepts element and globalContext as arguments.
If Product sub app is built independently then it calls mount function using element and mockContext.

# Container repo

https://github.com/Amol-Bhole/module-federation-container

# Products SubApp Output

if Products SubApp is run independently, output will be as below

![alt text](https://github.com/Amol-Bhole/module-federation-products/blob/main/src/assets/products_output.png?raw=true)
