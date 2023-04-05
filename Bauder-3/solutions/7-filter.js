// BEGIN
export const getGirlFriends = (users) => {
    return users.flatMap(user => user.friends).filter(friend => friend.gender === "female");
};

export default getGirlFriends;
// END