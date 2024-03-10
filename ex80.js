const integers = [5, 2, 8, 3, 7];

if (integers.length >= 1) {
    const temp = integers[0];
    integers[0] = integers[integers.length - 1];
    integers[integers.length - 1] = temp;

    console.log("Original Array:", integers);
} else {
    console.log("The array must have at least one element.");
}
