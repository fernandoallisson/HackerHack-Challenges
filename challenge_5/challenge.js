function xorAndSum(aBinary, bBinary) {
  const mod = 1e9 + 7;
  const numA = BigInt('0b' + aBinary);
  const reversedB = bBinary.split('').reverse();
  let soma = 0n;
  let powerOfTwo = 1n;

  for (let i = 0; i < reversedB.length; i++) {
    if (reversedB[i] === '1') {
      soma = (soma + (numA * powerOfTwo)) % BigInt(mod);
    }
    powerOfTwo = (powerOfTwo * 2n) % BigInt(mod);
  }

  console.log(soma.toString());

}


xorAndSum("10", "1010"); // Exemplo do enunciado

// Resolução com ajuda de IA - Chat GPT e comunidades
