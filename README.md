# daisyui-react

[![][version]](https://www.npmjs.com/package/daisyui)

daisyUI components built with React, Typescript and TailwindCSS [See docs](https://fourcels.github.io/daisyui-react/)

## Install

Make sure you've installed [TailwindCSS](https://tailwindcss.com/docs/installation) and [daisyUI](https://daisyui.com/docs/install/).

```
npm i -D @fourcels/daisyui-react tailwind-merge
```

## Add daisyui-react to your `tailwind.config.js` files

```js
module.exports = {
  //...
  content: [
    //...
    "node_modules/@fourcels/daisyui-react/dist/**/*.js",
  ],
  plugins: [require("daisyui")],
};
```

## Add styles to your `main.tsx` files

```tsx
import "@fourcels/daisyui-react/dist/index.css";
```
