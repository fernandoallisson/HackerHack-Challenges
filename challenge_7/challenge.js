/*
 * The function accepts following parameters:
 *  1. INTEGER s --> Ponto inicial da casa de SAM
 *  2. INTEGER t --> Ponto final da casa de SAM
 *  3. INTEGER a --> Localização da macieira
 *  4. INTEGER b --> localização da laranjeira
 *  5. INTEGER_ARRAY apples --> distâncias nas quais cada maçã cai da árvore.
 *  6. INTEGER_ARRAY oranges --> distâncias nas quais cada laranja cai da árvore.
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let counterApples = 0;
  let counterOranges = 0;

  const newApples = apples.map((elem) => {
    return a + elem;
  });
  
  const newOranges = oranges.map((elem) => {
    return b + elem;
  });

  for (const fruit of newApples) {
    if(s <= fruit && fruit <= t) {
      counterApples += 1;
    }
  }

  for (const fruit of newOranges) {
    if(s <= fruit && fruit <= t) {
      counterOranges += 1;
    }
  }
  
  console.log(counterApples)
  console.log(counterOranges)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
