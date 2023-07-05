const operation = document.getElementById('operation');
const btnCalculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const message = document.getElementById('message');
const result = document.getElementById('result');

// default operation
let operationSelect = 'withIva';

operation.addEventListener('change', (e) => {
    operationSelect = e.target.value;
});

btnCalculate.addEventListener('click', (e) => {
    if (validations()) {
        result.innerHTML = calPrice(amount.value, operationSelect);
    }
});

amount.addEventListener('keypress', (e) => {
    if (e.key === "Enter" && validations()) {
        result.innerHTML = calPrice(amount.value, operationSelect);
    }
});

amount.addEventListener('focus', (e) => {
    e.target.value = '';
})


const calPrice = (amount, operation) => {
    let total = 0;

    operation === 'withIva'
        ? total = amount * 1.19
        : total = amount / 1.19;

    return total.toFixed(2);
}

const validations = () => {
    // true when all validations passed
    let result = true;

    if (isNaN(amount.value)) {
        message.style.display = 'block';
        message.innerHTML = 'Ingrese solo números';
        result = false;
    }

    if (Number(amount.value) < 0 || Number(amount.value) === 0) {
        message.style.display = 'block';
        message.innerHTML = 'Ingrese solo números positivos y mayores que 0';
        result = false;
    }

    if (result) {
        message.style.display = 'none';
        message.innerHTML = '';
    }

    return result;
}
