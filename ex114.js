const sentence = "This is a correct sentence.";

if (/^[A-Z].*\.$/.test(sentence)) {
    console.log("The string is a correct sentence.");
} else {
    console.log("The string is not a correct sentence.");
}
