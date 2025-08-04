const birthdayCakeCandles = (candles) => {
  const sortedCandles = [...candles].sort((a, b) => a - b);
  const lastCandles = [...sortedCandles].pop()
  let counter = 0;

  for (let i = 0; i <= candles.length; i += 1) {
    if(sortedCandles[i] === lastCandles) {
      counter += 1;
    }
  }
  return console.log(counter)
}

birthdayCakeCandles([4, 4, 1 ,3]);