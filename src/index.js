import { createRandomNumber, sumNumbers } from './modules/utilities';
import _ from 'lodash';
import './style.css';
import './style2.css';

document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = createRandomNumber();
    const sum = sumNumbers(1, 2);
    const element = document.createElement('div');
    element.innerHTML = `Random number: ${randomNumber} ${sum}`;
    document.body.appendChild(element);
})

const inputNumber1 = document.getElementById('inputNumber1');
const inputNumber2 = document.getElementById('inputNumber2');
const btnFindMax = document.getElementById('btnFindMax');

btnFindMax.addEventListener('click', () => {
    console.log(_.max([+inputNumber1.value, +inputNumber2.value]));
})