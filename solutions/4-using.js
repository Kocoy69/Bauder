//BEGIN
export const getDomainInfo = (url) => {
    let schemeindex = url.search("://");
    let obj = {
        scheme: schemeindex != -1 ? url.slice(0, schemeindex) : "http",
        name: url.slice(schemeindex != -1 ? schemeindex + 3 : schemeindex + 1),
    };
    return obj;
}
export default getDomainInfo;
//END