const reverseString = function(str) {
    return str.split('').reverse().join('');
   }
module.exports = reverseString

// or, this is a way to reverse a string without using a method

// const reverseString = function(str) {
//     let newString = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }