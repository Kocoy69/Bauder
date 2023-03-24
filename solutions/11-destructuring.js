//BEGIN
export const getSortedNames = (obj) => {
    let newarr = [];
    for (let key in obj) {
        let { name: name } = obj[key];
        newarr.push(name);
    }
    return newarr.sort();
}
export default getSortedNames;
//END