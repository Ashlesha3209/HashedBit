const input = {
  student1: {
    subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
  },
  student2: {
    subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
  },
  student3: {
    subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
  }
};

const output = Object.keys(input).map(student => {
  const scores = Object.values(input[student]);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  return { [student]: { average: avg } };
});

console.log(output);
