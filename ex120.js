
function isPointInsideCircle(x, y, r, a, b) {
    const distanceSquared = (a - x) ** 2 + (b - y) ** 2;
    const radiusSquared = r ** 2;

    return distanceSquared < radiusSquared;
}

const circleCenterX = 0;
const circleCenterY = 0;
const circleRadius = 5;
const pointX = 2;
const pointY = 2;

if (isPointInsideCircle(circleCenterX, circleCenterY, circleRadius, pointX, pointY)) {
    console.log(`The point (${pointX}, ${pointY}) lies strictly inside the circle.`);
} else {
    console.log(`The point (${pointX}, ${pointY}) does not lie strictly inside the circle.`);
}
