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

const inputNumber1 = document.getElementById('inputNumber1') as HTMLInputElement;
const inputNumber2 = document.getElementById('inputNumber2') as HTMLInputElement;
const btnFindMax = document.getElementById('btnFindMax');

if (btnFindMax) {
    btnFindMax.addEventListener('click', () => {
        const a = +inputNumber1.value;
        const b = +inputNumber2.value;
        console.log(_.max([a, b]));
        console.log(sumNumbers(a, b));
    })
}