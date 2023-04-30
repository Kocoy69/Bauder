// BEGIN
export let bind = (context, func) => {
    return (...args) => {
        return func.call(context, ...args);
    };
};
export default bind;
// END