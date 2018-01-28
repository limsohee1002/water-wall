import request from './http-helper.js';
import renderlogic from './renderlogic.js';

document
  .getElementById('submit')
  .addEventListener('click', () => {
    let input = document.getElementById('input').value;
    let inputArr = input.split(', ')
                        .map(str => parseInt(str));
    event.preventDefault();
    
    renderlogic.inputWall(inputArr);
    request(JSON.stringify(input)).then((res) => {
      // let inputNumArr = inputArr
      renderlogic.fillWater(res.water, inputArr);
      renderlogic.setPeak(res.waterWall, inputArr);
    })
  })