function repeatedDigitSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}


console.log(repeatedDigitSum(456)); 
