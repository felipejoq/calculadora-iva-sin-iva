const CLPCurrency = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 2
});

export const calPrice = (amount, operations) => {
    let total = 0;
    let operationSelected;

    operations.forEach(operation => {
        if (operation.checked) {
            operationSelected = operation.value
        }
    });

    operationSelected === 'withIva'
        ? total = (amount * 1.19)
        : total = (amount / 1.19);

    return CLPCurrency.format(total.toFixed(2));
}