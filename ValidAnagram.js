const isAnagram = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");

console.log(isAnagram("anagram", "nagaram"));
