// BEGIN
export function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(curr) {
    if (this.currency != curr) {
        let currency = curr;
        let value = this.value * (currency == "usd" ? 1.2 : 0.7);
        return new Money(value, currency);
    }
    return new Money(this.value, this.currency);
};

Money.prototype.add = function add(other_money) {
    let value = this.value + other_money.exchangeTo(this.currency).getValue();
    return new Money(value, this.currency);
};

Money.prototype.format = function format() {
    return this.value.toLocaleString("en-US", { style: "currency", currency: this.currency });
};
export default Money;
// END