const friendsSL = [13, 14, 11, 17, 21, 16, 15, 20];

// console.log(typeof friendsSL);
// console.log(Array.isArray(friendsSL));

// console.log(friendsSL.includes(146));

//console.log(friendsSL.indexOf(17));

if (friendsSL.indexOf(13) !== -1) {
    console.log('true');
}
else {
    console.log('false');
};


//console.log(friendsSL.indexOf(17));

const newFriendsSL = [12, 13, 11, 13];

const allFriendsSL = newFriendsSL.concat(friendsSL);
console.log(allFriendsSL);