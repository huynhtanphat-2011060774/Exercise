
var today = new Date(); 
 
var day = today.getDay(); 
var daylit = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
console.log("Today is: " + daylit[day] + "."); 

var hour = today.getHours(); 
var minute = today.getMinutes(); 
var second = today.getSeconds(); 
var prepaid = (hour >= 12) ? " PM " : " AM "; 
hour = (hour >= 12) ? hour - 12 : hour;  

if (hour === 0 && prepaid === ' PM ') { 
    if (minute === 0 && second === 0) { 
        hour = 12; 
        prepaid = ' Noon'; 
    } else { 
        hour = 12; 
        prepaid = ' PM'; 
    } 
} 
if (hour === 0 && prepaid === ' AM ') { 
    if (minute === 0 && second === 0) { 
        hour = 12;
        prepaid = ' Midnight'; 
} else { 
hour = 12; 
prepaid = ' AM'
} 
} 

console.log("Current Time: " + hour + prepaid + " : " + minute + " : " + second); 