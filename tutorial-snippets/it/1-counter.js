const valueElement = document.getElementById('counter-value');

document.getElementById('dec').addEventListener('click', () => {
  valueElement.textContent = parseInt(valueElement.textContent) - 1;
});

document.getElementById('inc').addEventListener('click', () => {
  valueElement.textContent = parseInt(valueElement.textContent) + 1;
});
