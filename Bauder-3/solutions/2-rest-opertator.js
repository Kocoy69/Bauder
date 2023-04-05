// BEGIN
export const average = (...args) => {
    if (!args.length)
        return null;
    let sum = 0;
    for (let el of args) {
        sum += el;
    }
    return sum / args.length;
}
export default average;
// END