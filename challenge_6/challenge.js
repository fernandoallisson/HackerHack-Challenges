function gradingStudents(grades) {
  const newGrades = [];
  for (let num of grades) {
    if (num < 38) {
      newGrades.push(num);
    } else if (num % 5 === 4) {
      newGrades.push(num + 1);
    } else if (num % 5 === 3) {
      newGrades.push(num + 2);
    } else {
      newGrades.push(num);
    }
  }
  return newGrades;
}

// TESTE 01

// console.log(
//   gradingStudents([
//     44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0, 43, 2, 29, 53, 61, 40,
//     14, 67, 59, 33
//   ])
// );

// TESTE 02

// console.log(gradingStudents([73, 67, 38, 33]))