# Instructions for Part 2: Visual Regression Tests

## Register at Applitools

First, we need to register at Applitools, to get our free account.

1. Goto the [applitools.com registration page](https://applitools.com/register).
1. Register. You can use your Github account for registration, but only if you want to.

## Get the Applitools API Key

1. Goto the [Applitools Eyes Dashboard](https://eyes.applitools.com)
1. Click on the "account" menu in the top right, and choose "My API Key".
1. Copy the API Key.
1. Goto the terminal where you run the tests.
1. Run `export APPLITOOLS_API_KEY=<your-api-key>` if you're on Unix (Linux or MacOS).
1. Run `set APPLITOOLS_API_KEY=<your-api-key>` if you're on Windows.

You're good to go to run your Visual Regression Tests.

## Writing the tests in `visual-todo-actions.e2e.js`

1. Open the file `tests/visual/e2e-todo-actions.e2e.js`.
1. Write the visual test indicated in the comments.
1. Run the tests and check that they are OK (at the [Applitools Eyes Dashboard](https://eyes.applitools.com)).
1. You can run them again to verify that they passed.

## Change the CSS

1. Change line 77 of `src/css/index.css` from `155px` to `150px` (or some other significant change).
1. Run the tests again to see them fail (at the [Applitools Eyes Dashboard](https://eyes.applitools.com)).
1. Resolve all the "unresolved" screenshots to indicate a bug. You can use the "grouping"
   tool to group all the related changes.
1. Change the CSS back to what it was!

## [Bonus] Show the screenshots in multiple browser configurations

1. Add the following to the `cy.eyesOpen` options, and run the test again:

```js
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1280, height: 1024, name: 'chrome'},
        {width: 800, height: 600, name: 'firefox'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Galaxy S5', screenOrientation: 'portrait'}
      ]
```

## Done

You're done. Wait for the next part, which will be
[here](./3-it-tests-instructions.md).
