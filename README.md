# Electron React Template

This project is a template for creating electron applications using a react frontend.
When building your own project with the same technology stack, this template can be used to quickstart the development process.

The following technologies/frameworks/libraries and languages are used in this template:

- TypeScript
- Electron with esbuild
- React with vite
- Eslint with plugins for TypeScript and React

## Building and packaging

To install all dependencies needed to execute this project run: ```npm install```.

To run the application in development execute the following commands:

```bash
npm run react:dev    # Starts the webserver running the react application
npm run electron:dev # Starts the electron application 
```

To package the whole application into a distributable package run: ```npm run package```

## Electron application

The electron application is used to bundles the react application which can be deployed as a native gui program.
There are two commands in the package.json for the react application.

```bash
npm run electron:dev # Runs the electron application which tries to load the application running on port 3000
npm run electron:build # Bundles the electron application into a distributable package
```

## React application

The react application is written in TypeScript and uses vite for packaging as well as starting a webserver during development.
All files related to the react application are located in the `react`-directory.
There are two commands in the package.json for the react application.

```bash
npm run react:dev   # Starts a webserver running the react application in development
npm run react:build # Bundles and converts the react application for packaging with electron
```
