
const integers = [3, 7, 2, 9, 5];

if (integers.length >= 1) {
    const newArray = [integers[0], integers[integers.length - 1]];

    console.log("Original Array:", integers);
    console.log("New Array:", newArray);
} else {
    console.log("The array must have at least one element.");
}
