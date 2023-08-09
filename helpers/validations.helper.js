export const validator = (value, element) => {
    // true when all validations passed
    let result = isNumber(value, element) && isPositive(value, element)

    if (result) {
        element.style.display = 'none';
        element.innerHTML = '';
    }

    return result;
}

const isNumber = (value, element) => {
    if (isNaN(value)) {
        element.style.display = 'block';
        element.innerHTML = 'Ingrese solo números';
        return false;
    }
    return true;
}

const isPositive = (value, element) => {
    if (Number(value) <= 0) {
        element.style.display = 'block';
        element.innerHTML = 'Ingrese solo números positivos y mayores que 0';
        return false;
    }
    return true;
}