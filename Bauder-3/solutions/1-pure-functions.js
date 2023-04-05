// BEGIN
export const sayPrimeOrNot = (num) => {
    if (isPrimeUsingSieve(num))
        console.log("yes");
    else
        console.log("no");
}

export default sayPrimeOrNot;

function isPrimeUsingSieve(num) {
    if (num <= 1)
        return false;

    const sieve = new Array(num + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= num; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve[num];
}
// END