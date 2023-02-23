const moment = require('moment');

// shortTextForDuration = alert_opened_at => {
//         try {
//             let shortText = alert_opened_at;

//             if (alert_opened_at === 'a few seconds ago') shortText = 'S';
//             if (alert_opened_at === 'a minute ago') shortText = '1 m';
//             if (alert_opened_at === 'an hour ago') shortText = '1 H';
//             if (alert_opened_at === 'a day ago') shortText = '1 D';
//             if (alert_opened_at === 'a month ago') shortText = '1 M';
//             if (alert_opened_at === 'a year ago') shortText = '1 Y';

//             if (alert_opened_at.includes('minutes')) shortText = alert_opened_at.split(' ')[0] + ' m';
//             if (alert_opened_at.includes('hour')) shortText = alert_opened_at.split(' ')[0] + ' H';
//             if (alert_opened_at.includes('days')) shortText = alert_opened_at.split(' ')[0] + ' D';
//             if (alert_opened_at.includes('months')) shortText = alert_opened_at.split(' ')[0] + ' M';
//             if (alert_opened_at.includes('years')) shortText = alert_opened_at.split(' ')[0] + ' Y';

//             return shortText
//         } catch (e) {

//         }
// }



// var currentDate = new Date();

// // Create a new Date object for the date you want to check
// var dateToCheck = new Date('2022-01-01');

// // Calculate the difference in milliseconds between the current date and the date to check
// var timeDiff = currentDate.getTime() - dateToCheck.getTime();

// // Convert the difference to a number of years and round down using Math.floor
// var yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

// // Check if the difference is greater than or equal to one year
// if (yearsDiff >= 1) {
//   console.log('The date is more than one year ago');
// } else {
//   console.log('The date is less than one year ago');
// }
var dateToCheck = new Date('2025-02-24');
   
    
shortTextForExpiryDate = expiry_date => {

    let shortTextForColor = "white";

    const currentDate =  moment()
    const dateToCheck =  moment(expiry_date)
    const timeDiff = currentDate.diff(dateToCheck);
    const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    
    // const timeDiff = mo.getTime() - now.getTime();

    // const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    console.log(yearsDiff);
    if (yearsDiff === -1) shortTextForColor = "orange";
    else if (yearsDiff > -1) shortTextForColor = "red"
    else shortTextForColor = "green";
    return shortTextForColor
   

    // less then 1 year ogrange
    // more than 1 year ago red
    // otherwise green

    // if (yearsDiff === -1) shortTextForColor = "orange";
    // else if (yearsDiff > -1) shortTextForColor = "red"
    // else shortTextForColor = "green";


    // return shortTextForColor

}
console.log(shortTextForExpiryDate(dateToCheck))