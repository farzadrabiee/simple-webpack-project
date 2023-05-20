```npm init --y```

**Install webpack**

```npm install webpack webpack-cli --save-dev```


```npm install css-loader postcss-loader autoprefixer --save-dev```

**Extract the CSS into a separate file**

```npm install mini-css-extract-plugin --save-dev```

**Delete the dist folder before each build**

```npm install clean-webpack-plugin --save-dev```

**Minify the CSS**

```npm install css-minimizer-webpack-plugin --save-dev```

**Minify the JS**

```npm i terser-webpack-plugin --save-dev```

**Create the webpack.config.js file**

**Create the postcss.config.js file**

- Handle the CSS prefixes (to support all browsers)

**index.html**

```npm install html-webpack-plugin --save-dev```


**Babel**

```npm install --save-dev @babel/core @babel/preset-env babel-loader```

**TypeScript**

```npm install ts-loader --save-dev```

**ESLint**

```npm install eslint --save-dev```

**Setup the ESLint**

```npx eslint --init```

It will install the following packages:
```@typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest```

**Setup Test**

***Install Jest***

```npm install jest @types/jest jest-environment-jsdom @babel/preset-typescript --save-dev```

***Add the jest.config.js file***