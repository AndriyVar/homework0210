'use strict'

// цикл for

function isPalindrome(word) {

    word = word.toLowerCase();
  
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
  
    return isPalindrome;
}
  
const user_input = prompt("Введіть слово: ");
  
if (isPalindrome(user_input)) {
    alert("Це слово є паліндромом.");
} else {
    alert("Це слово не є паліндромом.");
}