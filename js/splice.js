const friends = [12, 45, 32, 22, 44, 62, 24, 69, 87];

//const partial = friends.splice(2, 5);
const partial = friends.splice(2, 5, 99, 555, 7777);

console.log(partial);
console.log(friends);