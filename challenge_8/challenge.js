/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1  -->  posição inicial do Canguru  1
 *  2. INTEGER v1  -->  distância por salto do canguru 1
 *  3. INTEGER x2  -->  posição inicial do Canguru  2
 *  4. INTEGER v2  -->  distância por salto do canguru 2
 */

function kangaroo(x1, v1, x2, v2) {
  const n = (x2 - x1) / (v1 - v2);
  if (Number.isInteger(n) && Number(n) >= 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(kangaroo(0, 2, 5, 3));
