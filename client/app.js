import request from './http-helper.js';

document
  .getElementById('submit')
  .addEventListener('click', () => {
    let input = document.getElementById('input').value;
    event.preventDefault();
    request(input)
  })