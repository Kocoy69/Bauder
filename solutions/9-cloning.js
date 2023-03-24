//BEGIN
export const cloneShallow = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;
    let newobj = {};
    for (let key in obj) {
        newobj[key] = cloneShallow(obj[key]);
    }
    return newobj;
}
export default cloneShallow;
//END