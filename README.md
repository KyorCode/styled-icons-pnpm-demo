# Init

Make sure you have pnpm installed.

- Run `pnpm install`
- Run `pnpm run build`

This will show you the following error: 

```
Error: /Users/herokodo/Projects/tests/styled-icons-pnpm-demo/src/index.ts(8,10): semantic error TS2305: Module '"../../../../../../Users/herokodo/Projects/tests/styled-icons-pnpm-demo/node_modules/styled-icons/boxicons-solid"' has no exported member 'ShoppingBag'.
```

This is actually typescript trying to resolve the imported types. But due to PNPM's way of installing packages, it can't find it. Unless we install the required packages directly.

Switch the content `package.json` with that from `package_PNPM.json`. 

