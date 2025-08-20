/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  bill.splice(k, 1, 0)
  
  const totalValue = bill.reduce((curr, val) => curr + val);

  if ((totalValue / 2) ==  b) {
    return('Bon Appetit')
  } else  {
    return(Math.abs((totalValue/2) - b))
  }
}

console.log(bonAppetit([3, 10,  2, 9],  1, 7))