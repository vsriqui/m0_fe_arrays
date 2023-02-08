var names = ["Jamie", "Taylor", "Sam", "Alex"];
// Returns a value from the array based on index position without altering array.
console.log(names.at(2));
console.log(names);

var cardValues = [2, 5, 7, 9];
// Unshift adds 4, 6 to the beginning of the array, retaining the same order in the command.
// Returns the new length of the array.
console.log(cardValues.unshift(4, 6));
console.log(cardValues);

var headCoinFlips = [true, false, true, false]
// Determines whether the value is an array, in this case the value of assignment operator headCoinFlips
console.log(Array.isArray(headCoinFlips));

