//BEGIN
export const pick = (obj, params) => {
    let newobj = {};
    for (let key in obj) {
        if (params.includes(key)) {
            newobj[key] = obj[key];
        }
    }
    return newobj;
}
export default pick;
//END