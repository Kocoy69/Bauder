// BEGIN
export const takeOldest = (users, num = 1) => {
    const oldestUsers = [...users].sort((user1, user2) => {
        const date1 = Date.parse(user1.birthday);
        const date2 = Date.parse(user2.birthday);
        return date1 - date2;
    });
    return oldestUsers.slice(0, num);
};

export default takeOldest;
// END