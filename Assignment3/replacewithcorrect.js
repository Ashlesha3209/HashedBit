function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("I use react", "react", "mern stack"));
