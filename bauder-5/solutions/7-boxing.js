// BEGIN
export let magic = (...args) => {
    let sum = args.reduce((prev, el) => prev + el, 0);
    let newmagic = (...args) => magic(sum, ...args);
    newmagic.valueOf = () => sum;
    return newmagic;
};
export default magic;
// END