/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  if (year == 1918) {
    return "26.09.1918";
  }
  if (year == 1700 || year == 1800 || year == 1900) {
    return `12.09.${year}`;
  }
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `12.09.${year}`; // bissexto
  } else {
    return `13.09.${year}`; // não bissexto
  }
}

console.log(dayOfProgrammer(1700));
