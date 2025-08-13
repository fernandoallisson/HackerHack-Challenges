/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  const mmcA = mmcArray(a);

  let mdcB = b[0];
  for (let i = 1; i < b.length; i++) {
    mdcB = calcularMDC(mdcB, b[i]);
  }

  let count = 0;
  let multiple = mmcA;

  while (multiple <= mdcB) {
    if (mdcB % multiple === 0) {
      count++;
    }
    multiple += mmcA;
  }

  return count;
}

function calcularMDC(a, b) {
  // Com algorítimo de Euclides;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calcularMMC(a, b) {
  return (a * b) / calcularMDC(a, b);
}

function mmcArray(arr) {
  if (arr.length === 0) {
    return 1; // Ou outro valor padrão, se o array estiver vazio
  }

  let mmc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mmc = calcularMMC(mmc, arr[i]);
  }
  return mmc;
}

// Exemplo de uso:
const a = [2, 4];
const b = [16, 32, 96];

console.log(getTotalX(a, b));
