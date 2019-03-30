'use strict';
const {describe, it} = require('mocha');
const {expect} = require('chai');

const {default: Store} = require('../../src/js/store');

describe.only('store unit', function() {
  it('should add an item', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
  });
});
