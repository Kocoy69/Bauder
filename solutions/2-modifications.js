//BEGIN
export const normalize = (obj) => {
    obj.name = obj.name[0] ? obj.name[0].toUpperCase() + obj.name.slice(1).toLowerCase() : "";
    obj.description = obj.description.toLowerCase();
}
export default normalize;
//END