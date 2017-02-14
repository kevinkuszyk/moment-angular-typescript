# Moment with Angular and TypeScript demo

This repro contains the sample code for my Stack Overflow question at ...

I'm using Angular 1.6.5, Moment 2.17.1 and TypeScript 2.17.1.  I have Angular typings installed from the npm `@types\angular` package.  Intellisense etc for Angular is working in VS Code.

## The first error

My sample app runs in the browser, but the TypeScript compiler complains that it can't find Moment:

```
app/controller.ts(3,20): error TS2503: Cannot find namespace 'moment'.
app/controller.ts(6,30): error TS2304: Cannot find name 'moment'.
```

## Try using a /// compiler directive

To fix this, I tried adding the following `///` compiler directive:

```ts
/// <reference path="../node_modules/moment/moment.d.ts" />
```

But that doesn't fix the TypeScript compiler:

```
app/controller.ts(5,20): error TS2503: Cannot find namespace 'moment'.
app/controller.ts(8,30): error TS2304: Cannot find name 'moment'.
```

## Import Moment

Next I tried importing Moment using the instructions from their [docs](http://momentjs.com/docs/#/use-it/typescript/): 

```ts
import * as moment from 'moment';
```

But this makes TypeScript generate a different erorr:

```
app/controller.ts(13,5): error TS2686: 'angular' refers to a UMD global, but the current file is a module. Consider adding an import instead.
```

## Import Angular

I also imported Angular.  This fixes TypeScript:

```ts
import * as angular from "angular";
```

But now the app doesn't run in the browser:

```
Uncaught ReferenceError: require is not defined
    at controller.js:2
```

## Use Require.JS

Finally I tried adding Require.JS, but this just causes a different runtime error:

```
Uncaught Error: Module name "moment" has not been loaded yet for context: _. Use require([])
http://requirejs.org/docs/errors.html#notloaded
    at makeError (require.js:168)
    at Object.localRequire [as require] (require.js:1433)
    at requirejs (require.js:1794)
    at controller.js:2
```