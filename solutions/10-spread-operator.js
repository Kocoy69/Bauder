//BEGIN
export const make = (str, data = {}) => {
    return { name: str, state: "moderating", createdAt: Date.now(), ...data };
}
export default make;
//END