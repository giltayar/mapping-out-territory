import {emptyItemQuery} from './item.js';

export default class Store {
  /**
   * @param {!string} name Database name
   * @param {function()} [callback] Called when the Store is ready
   */
  constructor() {
    /**
     * @type {ItemList}
     */
    this.liveTodos = [];
  }

  /**
   * Find items with properties matching those on query.
   *
   * @param {import('./item.js').ItemQuery} query Query to match
   *
   * @example
   * const data = db.find({completed: true})
   * // data shall contain items whose completed properties are true
   */
  find(query) {
    const todos = this.liveTodos;

    return todos.filter(todo => {
      for (const k in query) {
        if (query[k] !== todo[k]) {
          return false;
        }
      }
      return true;
    });
  }

  /**
   * Update an item in the Store.
   *
   * @param {import('./item.js').ItemUpdate} update Record with an id and a property to update
   * @param {function()} [callback] Called when partialRecord is applied
   */
  update(update) {
    const id = update.id;
    const todos = this.liveTodos;
    let i = todos.length;
    let k;

    while (i--) {
      if (todos[i].id === id) {
        for (k in update) {
          todos[i][k] = update[k];
        }
        break;
      }
    }
  }

  /**
   * Insert an item into the Store.
   *
   * @param {import('./item.js').Item} item Item to insert
   */
  insert(item) {
    const todos = this.liveTodos;
    todos.push(item);
  }

  /**
   * Remove items from the Store based on a query.
   *
   * @param {import('./item.js').ItemQuery} query Query matching the items to remove
   */
  remove(query) {
    let k;

    const todos = this.liveTodos.filter(todo => {
      for (k in query) {
        if (query[k] !== todo[k]) {
          return true;
        }
      }
      return false;
    });

    this.liveTodos = todos;
  }

  /**
   * Count total, active, and completed todos.
   *
   * @returns [total: number, active: number, completed: number]
   */
  count() {
    const data = this.find(emptyItemQuery);

    const total = data.length;

    let i = total;
    let completed = 0;

    while (i--) {
      completed += data[i].completed;
    }
    return [total, total - completed, completed];
  }
}
