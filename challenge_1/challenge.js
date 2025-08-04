function printStatement(n) {
  console.log("#".repeat(n))
}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // Espaços: n - i
    // '#' : i
    const line = ' '.repeat(n - i) + '#'.repeat(i);
    console.log(line);
  }
}
staircase(10);
