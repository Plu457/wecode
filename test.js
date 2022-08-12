console.clear();

const even = () => {
  const array50Nums = Array(50)
    .fill()
    .map((v, i) => i + 1);

  const result = array50Nums.filter(num => num % 2 === 0);

  return result;
};

console.log(even());
