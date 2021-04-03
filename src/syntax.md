## 📜 Syntax:


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
