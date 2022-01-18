# Instructions for Part 4: Unit Tests

## Modifying `mocha` script to also run unit tests

Remember the `mocha` script we added in the "integration tests" part? We need to add the unit tests to it. So modify
it to be like this:

```json
  "scripts": {
    "mocha": " mocha 'test/it/*.js' 'test/unit/*.js'"
  }
```

Now we can run the unit tests using `npm run mocha`.

## Writing the tests in `store.unit.js`

1. Open the file `test/unit/store.unit.js`
1. Remove the `throw new Error` line in the second test.
1. Write the code that tests what is defined to be tested in the comments in each test.
1. Try it out using `npm run mocha` or the debugger, till it works
   (remember, you can use `it.only` to run just one test).
1. Now fix all the tests in the file the same way, until all three tests pass.

## You're done!

Try and run **all** your tests, by just running `npm test`. All your E2E, Visual, Integration, and Unit tests
should be passing.

You are **Fearless**!
