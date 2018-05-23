// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse01(str) {
    // Turn 'str' into an array
    const arr = str.split(''); // splits each character and makes an Array
    // Call reverse method on the array
    arr.reverse();
    // Join the array back into a string 
    return arr.join('');
    // return the result
}

// one line solution
function reverse02(str) {
    return str.split('').reverse().join('');
}
module.exports = reverse02;
