function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

// Example
console.log(countWords("JavaScript is very easy to learn"));
