let n = 16;
let sum = 0;

while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
}

console.log(`Sum of the series: ${sum}`);
