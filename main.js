import { validator } from './helpers/validations.helper';
import { calPrice } from './services/operation.service';
import {operations, amount, message, result } from './elements/html.elements';
import './style.css'

btnGetPrice.addEventListener('click', () => {
  if(validator(amount.value, message)){
    result.innerText = calPrice(amount.value, operations)
  }
});