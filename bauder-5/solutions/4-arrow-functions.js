// BEGIN
export let each = (list, callback) => {
    for (let el of list) {
        callback.call(el);
    }
};

export default each;
// END