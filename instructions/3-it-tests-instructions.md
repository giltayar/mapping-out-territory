# Instructions for Part 3: Integration Tests

## Adding Mocha

We need to use Mocha for our tests, so let's first install it, and use it in our script:

### Installing Mocha

Usually, mocha is installed along with Chai. We'll also install a chai plugin, `chai-dom`, that is useful
for querying the DOM.

```sh
npm install --save-dev mocha chai chai-dom
```

### Installing JSDOM

Since we're testing the application using `jsdom`, we'll need that package:

```sh
npm install --save-dev jsdom
```

### Installing esm

Remember that we need the `esm` package to enable ES Module `import` statements? Let's install it:

```sh
npm install --save-dev esm
```

### Adding a script that enables us to run it

Theoretically, we can just run mocha using `npx mocha -r esm 'test/it/*.it.js'`, but that would not be nice.
But we can add a script to the `package.json`. So open the `package.json` and add the following script (for MacOS/Linux users):

```json
  "scripts": {
    "mocha": " mocha -r esm 'test/it/*.it.js'"
  }
```

Windows users, please use the one below
(it's the same, without the single quotes)

```json
  "scripts": {
    "mocha": " mocha -r esm test/it/*.it.js"
  }
```

Now we can run the tests using `npm run mocha`.

## Running the tests using a debugger

Out of the goodness of my heart, I have added a `.vscode/launch.json` that enables you to debug your Mocha tests
in Visual Studio Code.

To debug the test, set the breakpoints in VS Code, and press \<F5>. You can even put breakpoints
in the application code in the `src` directory! That's the huge benefit of running integration
tests in Node.JS.

## Running specific tests

Let's say you're debugging one of the tests, and you want to run just that specific test. What do you do?
In Mocha, it is easy: just add `.only` to the `it` call, thus:

```js
  it.only('should do something', () => {

  })
```

You can add it to multiple `it` calls, or if you want a whole group, to the `describe`.

## Writing the tests in `todo-actions.it.js`

1. Open the file `test/it/todo-actions.it.js`
1. Remove the `throw new Error` line in the second test.
1. Write the code that tests what is defined to be tested in the comments in each test.
1. Try it out using `npm run mocha` or the debugger, till it works.
1. Now fix the third test in the file the same way, until all three tests pass.

## Wrapping it up by automating running the tests

Now we need to add the running of the integration tests to `npm test`,
so change the `test` script in the `package.json` by adding a `&& npm run mocha` to the end of it.
In this way, ESlint, Cypress tests, _and_ integration tests will run.

* You can use `addNewTodo` which simulates typing in the `new-todo` input and then pressing {Enter}.
* You can also use the function `$` which is a "poor man's jQuery" which wraps `document.querySelector`
  for convenience.
* Note that [`chai-dom`](https://www.npmjs.com/package/chai-dom) is an extension to chai that helps
  with verifying thing about DOM elements. See how it is used in the first (given) test, and use it in your
  other tests.


## [Bonus] Writing the tests in `todo-filtering.e2e.js`

1. This file is more barebones. But you still get the JSDOM wrapper.
1. The comment describes what needs to be tested. Go ahead!

> Note one interesting thing. Once you click on the filter button, this triggers a `hashchange` event.
> Unfortunately, in JSDOM, this event will happen _asychronously_. So we need to wait on this.
> The easiest way to do this is `setTimeout(0)`, but if we want to do it nicely, we will use Node's `promisify`:
>
> ```js
> const {promisify} = require('util');
> // ...
> it('...', async () => {
> // click on link...
>
> await promisify(setTimeout)(0);
>
> // hashchange event happened
> expect($('...')).to.be.something;
> })
> ```

## Modify `npm test` to run the mocha tests too

Modify the `test` script so that besides Cypress E2E and visual tests, it will also run Mocha:

```json
{
  "scripts": {
    "test": "npm run eslint && start-test 3000 cypress:run && npm run mocha"
  }
}
```

Try and run it to see that it runs everything.

## Done

You're done. Wait for the last part, which will be
[here](./4-unit-tests-instructions.md).
