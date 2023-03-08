const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'gabul', 'habul', 'cabul', 'dabul', 'ebul', 'fabul', 'abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'ebul', 'fabul', 'gabul', 'habul', 'cabul', 'ebul', 'fabul', 'abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul'];

function removeDuplicate(name) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);