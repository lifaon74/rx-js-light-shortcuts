[![npm (scoped)](https://img.shields.io/npm/v/@lifaon/rx-js-light-shortcuts.svg)](https://www.npmjs.com/package/@lifaon/rx-js-light-shortcuts)
![npm](https://img.shields.io/npm/dm/@lifaon/rx-js-light-shortcuts.svg)
![NPM](https://img.shields.io/npm/l/@lifaon/rx-js-light-shortcuts.svg)
![npm type definitions](https://img.shields.io/npm/types/@lifaon/rx-js-light-shortcuts.svg)

## 🚝 rx-js-light-shortcuts

This library provides shortcuts for [rx-js-light](https://github.com/lifaon74/rx-js-light).

## Example

```ts
const $inputA$ = let$$('abc');
const $inputB$ = let$$('def');
const $inputC$ = let$$();

const isInputAValid$ = map$$($inputA$.subscribe, (value) => (value.length >= 10));
const isInputBValid$ = map$$($inputB$.subscribe, (value) => (value.length <= 10));
const isInputCValid$ = const$$(true); // let's assume that inputC is always valid

const isFormValid$ = andM$$(isInputAValid$, isInputBValid$, isInputCValid$);

// EQUIVALENT
// const isFormValid$ = function$$((isInputCValid, isInputBValid, isInputCValid) => {
//   return isInputCValid && isInputBValid && isInputCValid;
// }, [isInputAValid$, isInputBValid$, isInputCValid$]);

const isFormValidText$ = map$$(isFormValid$, (valid) => `Form is ${ valid ? 'valid' : 'invalid' }`);

isFormValidText$(console.log.bind(console));

/*--*/

const createAndAppendElement = (tagName) => document.body.appendChild(document.createElement(tagName));

const inputA = createAndAppendElement('input');
inputA.oninput = () => $inputA$.emit(inputA.value);

const inputB = createAndAppendElement('input');
inputB.oninput = () => $inputB$.emit(inputB.value);

const inputC = createAndAppendElement('input');
inputC.oninput = () => $inputC$.emit(inputC.value);

const validityContainer = createAndAppendElement('div');
isFormValidText$((text) => {
  validityContainer.innerText = text;
});
```


## 📦 Installation

```bash
yarn add @lifaon/rx-js-light-shortcuts
# or
npm install @lifaon/rx-js-light-shortcuts --save
```

This library supports:

- **common-js** (require): transpiled as es5, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lifaon/rx-js-light-shortcuts](https://cdn.skypack.dev/@lifaon/rx-js-light-shortcuts)


## 📜 Naming convention

`name$`: SubscribeFunction

```ts
const value$ = of(5);
```


`name$$`: generator of SubscribeFunction

```ts
const value$$ = mapSubscribePipe(String);
```

`name$$$`: generator of generator of SubscribeFunction (includes all SubscribePipeFunction)

```ts
const map$$$ = mapSubscribePipe;
```


`$name`: EmitFunction

```ts
const $destination = (value: any) => console.log(value);
```


`$$name`: generator of EmitFunction

```ts
const $$value = mapEmitPipe(String);
```

`$$$name`: generator of generator of EmitFunction (includes all EmitPipeFunction)

```ts
const $$$map = mapEmitPipe;
```

`$name$`: Source

```ts
const $value$ = let$$(5);
```

