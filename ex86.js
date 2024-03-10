const angle = 120;

if (angle > 0 && angle < 90) {
    console.log("Acute angle: An angle between 0 and 90 degrees.");
} else if (angle === 90) {
    console.log("Right angle: A 90-degree angle.");
} else if (angle > 90 && angle < 180) {
    console.log("Obtuse angle: An angle between 90 and 180 degrees.");
} else if (angle === 180) {
    console.log("Straight angle: A 180-degree angle.");
} else {
    console.log("Invalid angle. Please enter an angle between 0 and 180 degrees.");
}
