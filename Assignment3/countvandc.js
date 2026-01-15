let text = "JavaScript is a powerful language";
let vowels = 0, consonants = 0;

for (let char of text.toLowerCase()) {
  if (/[aeiou]/.test(char)) vowels++;
  else if (/[a-z]/.test(char)) consonants++;
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
