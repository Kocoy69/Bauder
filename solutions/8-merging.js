//BEGIN
export const fill = (obj, keys, data) => {
    if (keys.length) {
        return keys.reduce((a, b) => {
            a[b] = data[b];
            return a;
        }, obj);
    } else {
        for (let key in data) {
            obj[key] = data[key];
        }
        return obj;
    }
}
export default fill;
//END