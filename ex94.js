const integers = [3, 5, 2, 3, 7, 3, 5, 2, 3, 9, 5, 5];

const frequencyMap = {};
let mostFrequentNumber;
let maxFrequency = 0;

for (const num of integers) {
    if (frequencyMap[num]) {
        frequencyMap[num]++;
    } else {
        frequencyMap[num] = 1;
    }

    if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentNumber = num;
    }
}

console.log(`Most frequently appearing number: ${mostFrequentNumber}`);
