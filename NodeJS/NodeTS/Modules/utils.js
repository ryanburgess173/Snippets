var getCurrentDate = function () {
    new Date().toISOString();
};
var formatCurrency = function (amount, currency) {
    if (currency === void 0) { currency = 'USD'; }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
};
exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;
