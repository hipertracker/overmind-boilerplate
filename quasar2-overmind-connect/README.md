# Quasar 2 + Vue 3 + Typescript + Overmind

Simple example of using Quasar v2 + TypeScript + Overmind (with [connect()](https://overmindjs.org/views/vue#connect))

- Quasar 2 <https://quasar.dev/>
- Vue 3 <https://v3.vuejs.org/>
- TypeScript <https://www.typescriptlang.org/>
- Overmind <https://www.overmindjs.org/> (instead of Vuex)

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

### Using Overmind DevTools debugger

Overmind DevTools: <https://overmindjs.org/core/devtools>

As standalone Electron app:

```
npx overmind-devtools@latest
```

or [Overmind Devtools VSCode](https://marketplace.visualstudio.com/items?itemName=christianalfoni.overmind-devtools-vscode) extension
