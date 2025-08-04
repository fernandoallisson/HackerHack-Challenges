function miniMaxSum(arr) {
  const minMax = [...arr].sort((a, b) => a - b)
  const maxMin = [...arr].sort((a, b) => b - a)

  minMax.pop();
  maxMin.pop();

  const somaMin = minMax.reduce((acc, val) => acc + val, 0);
  const somaMax = maxMin.reduce((acc, val) => acc + val, 0);

  return console.log(`${somaMin} ${somaMax}`)

}

miniMaxSum([1, 3, 5, 7, 9])