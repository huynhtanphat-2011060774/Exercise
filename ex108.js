const vector1 = [2, 3, 4];
const vector2 = [5, 6, 7];

let dotProduct = 0;

for (let i = 0; i < vector1.length; i++) {
    dotProduct += vector1[i] * vector2[i];
}

console.log(`Dot product of [2, 3, 4] and [5, 6, 7]: ${dotProduct}`);
