const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {
        return 1;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return i;
        }
    }

    return num;
};
// END

export default smallestDivisor;