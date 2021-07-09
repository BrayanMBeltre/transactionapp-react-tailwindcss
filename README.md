First, open your terminal and type the following commands to create a new project.

```bash
#using NPX
npx create-react-app tailwindreact-app

#using NPM
npm init react-app tailwindreact-app

#using yarn
yarn create react-app tailwindreact-app
```

Add cd to your app directory:

```bash
cd tailwindreact-app
```

Next, install Tailwind and its dependencies:

```bash
#using npm
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

#using Yarn
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 -D
```

## How to configure CRACO

```bash
#using npm
npm install @craco/craco

#using Yarn
yarn add @craco/craco
```

First, create a CRACO configuration file in your base directory, either manually or using the following command:

```bash
touch craco.config.js
```

Next, add tailwindcss and autoprefixer as PostCSS plugins to your CRACO config file:

```jsx
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

Open your package.json file and replace the content of "scripts" with:

```json
  "scripts": {
    "dev": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
}
```

Create the default configurations scaffold:

```bash
npx tailwindcss init
```

Open your tailwind.config.js

```jsx
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      filter: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
```

add the following to your src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Source [https://blog.logrocket.com/tailwind-css-configure-create-react-app/](https://blog.logrocket.com/tailwind-css-configure-create-react-app/)
