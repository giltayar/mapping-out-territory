const {expect} = require('chai');

before(async function () {
  require('../src/dom-counter.js');
});

it('inc button should work', async () => {
  const incButton = document.getElementById('inc');
  incButton.click();

  const valueElement = document.getElementById('counter-value');
  expect(valueElement.textContent).to.equal('1');
});
