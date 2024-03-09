function convertToHoursAndMinutes(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);


    var minutes = totalMinutes % 60;

    return {
        hours: hours,
        minutes: minutes
    };
}
var totalMinutes = 200;
var timeObject = convertToHoursAndMinutes(totalMinutes);

console.log("Total Minutes: " + totalMinutes);
console.log("Converted Time: " + timeObject.hours + " hours and " + timeObject.minutes + " minutes");
