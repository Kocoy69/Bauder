// BEGIN
export const groupBy = (users, group) => {
    return users.reduce((oldValue, element) => {
        const key = element[group];
        return {
            ...oldValue,
            [key]: [...(oldValue[key] || []), element],
        };
    }, {});
};

export default groupBy;
// END