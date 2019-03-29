# Mapping Out the Territory: A Frontend Testing Workshop

Exercises and instructions for the workshop.

You can find the presentation that accompanies this workshop
[here](http://bit.ly/mapping-out-territory).

## Installation Instructions

1. If you don't have Node.JS, Install Node.JS (any version from version 8 is fine).
1. git-clone this repository.
   * `git clone https://github.com/giltayar/mapping-out-territory.git` in your code directory of
     choice.
1. Open your favorite editor in the directory created.
   * If you use Visual Studio Code, you can optionally install the recommended extensions that VS
     Code suggests (when you open the editor) for a nicer editing experience
     (it's just ESLint and Prettier Plugins).
     * You will then see eslint errors in the editor, plus you can use `<Cmd/Ctrl>+<Shift>+F` to
       format the code using Prettier.
     * Don't worry, even if you don't use the extensions, `npm test` will also run eslint and
       prettier.
     * You also get nice command completions for cypress and other libraries, although you may also
       get them in other editors!
   * Nothing in the exercises is stopping you from using whatever editor you want
1. Run `npm ci` in the workshop directory (`npm ci` is like `npm install`, but faster).
1. You're good to go!

## The Structure of the Exercises

There are four parts to the workshop, each corresponding to a different type of test:

* **E2E tests**: write tests that check the whole application (with or without the backend)
  in a browser
* **Visual regression tests**: write tests that ensure that the application's look is still OK
* **Integration tests**: write tests that check a subset of the whole application,
  outside of the browser
* **Unit tests**: write tests that check one component, or some business logic code

For each of these, the corresponding subdirectory under `test` (in the workshop directory)
will contain a _part_ of the tests needed, and you will need to complete the parts that are missing.
The order of the workshop will be:

1. [E2E tests](./docs/1-e2e-tests-instructions.md)
1. [Visual tests](./docs/2-visual-regression-tests-instructions.md)
1. [Integration tests](./docs/3-it-tests-instructions.md)
1. [Unit tests](./docs/4-unit-tests-instructions.md)

Good luck! And as we said, start from the instructions for the [E2E tests](./docs/e2e-tests-instructions.md).

## Copyright Notices

### TodoMVC Vanilla ES6 Implementation

* Copied and modified from the
  [TodoMVC repository](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6)
* [Original license](https://github.com/tastejs/todomvc/blob/master/license.md)
* Modified to work in the browser without transpiling (using native ES6 Modules).
