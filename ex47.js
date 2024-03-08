function isInRange(number) {
    return (number >= 40 && number <= 10000);
}
var givenNumber = 4000;

if (isInRange(givenNumber)) {
    console.log(givenNumber + " exists in the range 40 to 10000.");
} else {
    console.log(givenNumber + " does not exist in the range 40 to 10000.");
}
