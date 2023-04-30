// BEGIN 
const getAllFriendsUser = (user) => user.getFriends(); 
 
const getAllIdFriendsUser = (user) => getAllFriendsUser(user).map(el => el.id); 
 
export const getMutualFriends = (user1, user2) => { 
    const [user1Idsfriends, user2friends] = [getAllIdFriendsUser(user1), getAllFriendsUser(user2)]; 
    const user2Idsfriends = getAllIdFriendsUser(user2); 
    const MutualFriends = []; 
    for (let i = 0; i != user1Idsfriends.length; i++) {
        if (user1Idsfriends.includes(user2Idsfriends[i])) {
            MutualFriends.push(user2friends[i]); 
        }
    }
    return MutualFriends; 
}; 
 
export default ({ id = null, friends = [] } = {}) => ({ 
    friends: friends, 
    id: id, 
    getFriends() { 
        return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне 
    }, 
}); 
// END
