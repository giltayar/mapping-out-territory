const {JSDOM} = require('jsdom');

const {window} = new JSDOM('<div id="root">Hello, World<div>');
const {document} = window;

const text = document.getElementById('root').textContent;

console.log(text);
