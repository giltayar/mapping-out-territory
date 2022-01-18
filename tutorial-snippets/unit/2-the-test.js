import {describe, it} from 'mocha';
import {expect} from 'chai';

import {default as Store} from '../../src/js/store.js';

describe.only('store unit', function () {
  it('should add an item', () => {
    const store = new Store();

    store.insert({id: 1, completed: false, title: 'Clean room'});

    expect(store.find({id: 1})).to.eql([{id: 1, completed: false, title: 'Clean room'}]);
  });
});
