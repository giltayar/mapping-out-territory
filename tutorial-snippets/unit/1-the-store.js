export default class Store {
  constructor() {
    this.liveTodos = [];
  }

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
  // ...
}
