/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 *
 *  Return An Integer n
 */



function birthday(s, d, m) {
  let counter = 0;
  let array = []

  if (s.length == 1 && s[0] == d) return 1;

  for (let i = 0; i < s.length; i++) {
    array.push(s[i])
    if(array.length == m) {
      const value = array.reduce((acc, val) => acc + val)

      if (value == d) {
        counter += 1;
        i = i - (array.length) + 1;
        array = []
      } else {
        i = i - (array.length) + 1;
        array = []
      }
    }
  }
    return counter;
}

const array = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1,];

console.log(birthday(array, 18, 7));
