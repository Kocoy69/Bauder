//BEGIN
export const countWords = (string) => {
    if (string != "")
        return string.split(" ").map(el => el.toLowerCase()).reduce((a, b) => {
            b in a ? a[b]++ : a[b] = 1;
            return a;
        }, {});
    return {};
}
export default countWords;
//END