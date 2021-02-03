'use strict';
const {describe, it} = require('mocha');
const {expect} = require('chai');

const {default: Store} = require('../../src/js/store');

describe.only('store unit', function () {
  it('should add an item', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
  });

  it('should add two items', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
    expect(store.find({id: 2})).to.eql([{id: 2, completed: false, title: 'Wash dishes'}]);

    expect(store.count()[0]).to.eql(2);
  });

  it('should remove an item', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});
    store.insert({id: 3, completed: false, title: 'Laundry'});

    store.remove({id: 3});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
    expect(store.find({id: 2})).to.eql([{id: 2, completed: false, title: 'Wash dishes'}]);

    expect(store.count()[0]).to.eql(2);
  });

  it('should update an item title', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});
    store.insert({id: 3, completed: false, title: 'Laundry'});

    store.update({id: 3, title: 'Maundry'});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
    expect(store.find({id: 2})).to.eql([{id: 2, completed: false, title: 'Wash dishes'}]);
    expect(store.find({id: 3})).to.eql([{id: 3, completed: false, title: 'Maundry'}]);

    expect(store.count()[0]).to.eql(3);
  });

  it('should update an item completed', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});
    store.insert({id: 3, completed: false, title: 'Laundry'});

    store.update({id: 3, completed: true});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
    expect(store.find({id: 2})).to.eql([{id: 2, completed: false, title: 'Wash dishes'}]);
    expect(store.find({id: 3})).to.eql([{id: 3, completed: true, title: 'Laundry'}]);

    expect(store.count()[0]).to.eql(3);
  });

  it('should count active items', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});
    store.insert({id: 3, completed: false, title: 'Laundry'});

    store.update({id: 3, completed: true});

    expect(store.count()[1]).to.eql(2);
  });

  it('should count completed items', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});
    store.insert({id: 2, completed: false, title: 'Wash dishes'});
    store.insert({id: 3, completed: false, title: 'Laundry'});

    store.update({id: 3, completed: true});
    store.update({id: 1, completed: true});

    expect(store.count()[2]).to.eql(2);
  });
});
