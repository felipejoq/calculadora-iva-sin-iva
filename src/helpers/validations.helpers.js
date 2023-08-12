export const validator = (value, setResult) => {
    // true when all validations passed
    return isNumber(value) && isPositive(value)
}

const isNumber = (value) => {
    if (isNaN(value)) {
        return false;
    }
    return true;
}

const isPositive = (value) => {
    if (Number(value) <= 0) {
        return false;
    }
    return true;
}