let n = process.argv[2];
let power = 1;

while (power <= 256 && power <= Math.pow(2, n)) {
  console.log(power);
  power *= 2;
}
