# Simple To-Do List Application
This project was created using Vite, and it allows users to manage their to-do lists. Below is a walkthrough of the steps taken to create and deploy the application.

## Step 1: Initializing the Project
I started by setting up a new project using Vite:

```bash
npm init vite@latest vite-vanilla-js
cd vite-vanilla-js
npm install
```

## Step 2: Creating a Simple To-Do List
I developed a basic to-do list application, allowing users to add tasks to a list.

## Step 3: Custom Configuration with config.vite.js
To customize the Vite configuration, I created a ```config.vite.js``` file at the root of the project:

```js
// config.vite.js

export default {
  // Example configurations:
 css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor: orange;`,
        }
      }
 }
  // Other configurations...
};
```
In this file, I added custom settings configurations based on project needs.

## Step 4: Building for Production
To prepare the application for deployment, I ran the build command:

```bash
npm run build
```
