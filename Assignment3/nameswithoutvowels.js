const states = [
  "Maharashtra",
  "Uttar Pradesh",
  "Andhra Pradesh",
  "Odisha",
  "Tamil Nadu",
  "Kerala",
  "Rajasthan",
  "Assam",
  "Bihar"
];

const result = states.filter(
  state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase())
);

console.log(result);
