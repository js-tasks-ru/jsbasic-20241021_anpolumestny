function factorial(n) {
  let fact = 1

  if (n in [0, 1]) {
    return 1;
  }

  while (n !== 1) {
    fact = fact * n;
    n -= 1;
  }
  return fact;
}
