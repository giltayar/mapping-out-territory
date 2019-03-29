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
1. Click on the `todo-actions.js`. This will run the tests in the file.
1. You can see from the window, that one tests passes, but two fail.
1. These are the two tests you need to write.

## Writing the tests in `todo-actions.js`

1. Remove the `throw new Error` in the first test.
1. Write the code that tests what is defined to be tested in the comments in each test.
1. To try it out, either rerun Cypress if you closed it,
   or just click the "rerun" button in the existing Cypress window.
1. Try it out until the test passes.
1. Change some stuff in the test, to see that changing something fails the test.
   This is a good way to ensure that the test passes because the code is correct,
   and not because it's not testing anything!
1. Now fix the third test in the file the same way, until all three tests pass.

## [Bonus] Writing the tests in `todo-filtering.js`

1. This file is more barebones. You have to write everything!
1. The comment describes what needs to be tested. Go ahead!

## Done

You're done. Wait for the next part, which will be [here](./2-visual-regression-tests-instructions.md).
