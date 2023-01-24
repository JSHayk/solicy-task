const arr = [
  {
    id: 2,
  },
  {
    id: 7,
  },
];

function checkId(id) {
  const found = arr.find((item) => item.id === id);
  if (found) {
    return Math.floor(Math.random() * 100);
  }
  return Math.floor(Math.random() * 100);
}
console.log(checkId(2));
