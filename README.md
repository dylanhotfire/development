# Cyclic Finance

**Micro Front-End built on Typescript React**

## Getting Started

### Install [VS Code](https://code.visualstudio.com/download)

.vscode project level settings and extension recomendations

### Install Node

1. Install [Nodist](https://github.com/nullivex/nodist)
2. Install Node and npm
3. Set global versions:

```
> nodist global <ver-req>
> nodist npm <ver-req>
```

### Running the Application

**Development**

Install node_modules and startup applicaiton on webpack-dev-server.

```
> npm i
> npm start
```

**Production**

Generate assets.

```
> npm run build
```

### Build a component!

This application is built with [single-spa-react](https://www.npmjs.com/package/single-spa-react). The goal of this is to provide isolated applications that can be served to an HTML file.

Any components created under `src/components/containers` will be considered as an item by single-spa to be rendered into an HTML file.

From the HTML template, all you have to do is sign an element with a class of `component` and reference the component name and single-spa will do the rest. For exmpale:

**Element in HTML file:**

`<div data-component="Foo" class="component"></div>`

**Corresponding component:**

`src/components/containers/Foo/Foo.tsx`;

### Styles

Global styles are mainained under the `scss` directory. It is built on a portion of [bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/), utilising common FE utilities such as the grid flex, layout, spacing etc. This provides the repository with responsive functional CSS with the option of creating fully-customisable overrides.

Localised SCSS is also an option with [Aphrodite](https://github.com/Khan/aphrodite) where you're free to create component-specific styles.
