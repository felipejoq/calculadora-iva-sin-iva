const CLPCurrency = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 2
});

export const calPrice = (amount, operation) => {
    
    let total = 0;

    operation === 'WithIVA'
        ? total = (amount * 1.19)
        : total = (amount / 1.19);

    return CLPCurrency.format(total.toFixed(2));
}