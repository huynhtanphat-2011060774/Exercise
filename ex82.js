const num1 = 123;
const num2 = 456;

const arr1 = num1.toString().split('').map(Number);
const arr2 = num2.toString().split('').map(Number);

while (arr1.length < arr2.length) {
    arr1.unshift(0);
}

while (arr2.length < arr1.length) {
    arr2.unshift(0);
}

const result = arr1.map((digit1, index) => digit1 + arr2[index]);

console.log(`Sum without carrying: ${result.join('')}`);
