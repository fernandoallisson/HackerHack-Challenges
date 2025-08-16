/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let recordMax = scores[0];
  let recordMin = scores[0];

  let counterMaxRecord = 0;
  let counterMinRecord = 0;

  for (const score of scores) {
    if (score > recordMax) {
      counterMaxRecord += 1;
      recordMax = score;
    } else if (score < recordMin) {
      counterMinRecord += 1;
      recordMin = score;
    }
  }

  return ([counterMaxRecord, counterMinRecord])
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))