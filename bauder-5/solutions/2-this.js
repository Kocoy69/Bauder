// BEGIN
let Rational = (numer, denom) => ({
    numer,
    denom,
    getNumer() { return this.numer },
    getDenom() { return this.denom },
    setNumer(numer) { this.numer = numer },
    setDenom(denom) { this.denom = denom },
    toString() {
        return `${this.numer}/${this.denom}`
    },
    add(other) {
        return Rational((this.numer * other.denom + this.denom * other.numer), (other.denom * this.denom));
    }
});

export let make = (numer = null, denom = null) => Rational(numer, denom);

export default make;
// END