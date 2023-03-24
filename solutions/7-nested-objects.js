//BEGIN
export const get = (obj, params) => {
    return params.reduce((a, b) => a && Object.hasOwn(a, b) ? a[b] : null, obj);
}
export default get;
//END