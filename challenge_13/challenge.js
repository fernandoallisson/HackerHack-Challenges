/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const birds = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (birds.has(arr[i])) {
      birds.set(arr[i], birds.get(arr[i]) + 1 || 0);
    } else {
      birds.set(arr[i], 1);
    }
  }

  const orderedMap = new Map([...birds.entries()].sort((a, b) => a[0] - b[0]));

  
  let maxQuant = 0;
  let currBird = 0;

  for (let [key, value] of orderedMap) {
    if (value > maxQuant) {
      maxQuant = value;
      currBird = key;
    }
  }

  return currBird;
}

console.log(migratoryBirds([6, 1, 3, 4, 6, 1, 6, 1, 1, 6, 1, 1, 6, 6])); // 1
