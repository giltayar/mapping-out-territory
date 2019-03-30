# Instructions for Part 1: E2E Tests

## Running the application

1. In the command line, run the TodoMVC application using `npm start`.
   You should start it in the background because you want to run the tests in a second.
   * In Unix systems, use `npm start &` to run in the background.
     You can kill it later by using `kill %1`.
   * In Windows, use `start npm start`. You can kill it later by closing the window.
1. Try it out by navigating to the [app](http://localhost:3000).
1. Works? Great!

## Opening Cypress and running the tests

1. Let's open Cypress and see what passes and what fails.
1. Run `npx cypress open`. This will open Cypress.
   * The first time, Cypress initializes stuff. No worries.
   * You will get to a page that includes a list of all the tests.
1. Click on the `todo-actions.e2e.js`. This will run the tests in the file.
1. You can see from the window, that one tests passes, but two fail.
1. These are the two tests you need to write.

## Writing the tests in `todo-actions.e2e.js`

1. Remove the `throw new Error` in the first test.
1. Write the code that tests what is defined to be tested in the comments in each test.
1. To try it out, either rerun Cypress if you closed it,
   or just click the "rerun" button in the existing Cypress window.
1. Try it out until the test passes.
1. Change some stuff in the test, to see that changing something fails the test.
   This is a good way to ensure that the test passes because the code is correct,
   and not because it's not testing anything!
1. Now fix the third test in the file the same way, until all three tests pass.

## Wrapping it up by automating running the tests

We've just completed our E2E tests for TodoMVC. But running them is a bit awkward:

1. First you `npm start` and run it in the background.
2. Then you `npx cypress open` and choose the `todo-actions.e2e.js`

This isn't very automated. And if you've just refactored your code and want to test it,
you wouldn't want this klutzy way of running it, right?

The standard way in the NPM world it to tie everything into `npm test`. Let's run `npm test` now:

1. Run `npm test`.

It runs ESLint, which is as it should be! You can think of ESLint as part of your test suite. But we also want
to run the Cypress tests! Let's do it.  Let's add Cypress to npm test.

First, let's create a script that runs Cypress non-interactively, without opening the interactive window which
chooses the tests. To do this, we use `cypress run`.

1. Open a terminal and run `cypress run --browser chrome`.

You can see Cypress running all the E2E tests, which should pass.

> Note: the `--browser chrome` is usually not used and not needed. If not used, Cypress runs the
> browser headlessly in "Electron". Unfortunately, running it this way gives us Chrome v59 (!),
> which does not support ES Modules, which we use in this TodoMVC. Adding `--browser chrome`
> makes Cypress run it using the local Chrome browser. In CI, you can use a docker image
> with Chrome installed, and Cypress (assures us it) runs it headlessly.

But this is running with our background `npm start`. So first, we need to kill the `npm start` you ran at the beginning of this
session.

1. On Unix, run `kill %1`, on Windows, close the window that is running `npm start`.

So now we ne need to run `npm start`, run `cypress run` and then kill the `npm start`. How do we do that? We'll use Gleb Bahmutov's `start-server-and-test` package.

1. Run `npm install --save-dev start-server-and-test` to install the package.
1. Open `package.json` in your editor, and add the following `cypress:run`. Something like:

```json
{
  "scripts": {
    "cypress:run": "cypress run --browser chrome",
    "test": "npm run eslint && start-test 3000 cypress:run"
  }
}
```

<!-- markdownlint-disable MD029 -->

3. Run `npm test` for great success!

<!-- markdownlint-enable MD029 -->

`start-test 3000 cypress:run`, which comes from the `start-server-and-test` package, runs `npm start`, waits for the server to listen on the port `3000` we specified, and then `npm run`-s `cypress:run` we specified. Finally, once `cypress:run` is done,
it will kill the `npm start` process. Very convenient package!

## [Bonus] Writing the tests in `todo-filtering.e2e.js`

1. This file is more barebones. You have to write everything!
1. The comment describes what needs to be tested. Go ahead!

## Done

You're done. Wait for the next part, which will be
[here](./2-visual-regression-tests-instructions.md).
