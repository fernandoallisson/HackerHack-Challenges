/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if((ar[i] + ar[j]) % k == 0) {
        counter += 1;
      }
    }
  }

  return counter;
}

const array = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(6, 3, array));
