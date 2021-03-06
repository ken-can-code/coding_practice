// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  for (let i = 0; i < Math.ceil(str.length / 2); i += 1) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) return false;
  }

  return true;
}

console.log(palindrome("abba")) // === true
console.log(palindrome("abcdefg")) // === false
console.log(palindrome('racecar')); // === true