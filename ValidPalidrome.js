var isPalindrome = function (s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const formattedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the formatted string is a palindrome
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }
  return true; // All characters match, it's a palindrome
};
console.log(isPalindrome("apple"));
