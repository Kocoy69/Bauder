const sequenceSum = (begin, end) => {
    // BEGIN
    if (begin > end) {
        return NaN;
    }

    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i;
    }

    return sum;
};
// END

export default sequenceSum;