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

  it('should add two items', () => {
    throw new Error('test fails because you need to implement it!');
  });

  it('should remove an item', () => {
    throw new Error('test fails because you need to implement it!');
  });

  it('should update an item title', () => {
    throw new Error('test fails because you need to implement it!');
  });

  it('should update an items completed state', () => {
    throw new Error('test fails because you need to implement it!');
  });

  it('should count active items', () => {
    throw new Error('test fails because you need to implement it!');
  });

  it('should count completed items', () => {
    throw new Error('test fails because you need to implement it!');
  });
});
