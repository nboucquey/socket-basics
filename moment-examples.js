var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());

var timestamp = 1460903208902;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format("H:mm")); // 14:26

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format("H:mm - D/MM/YYYY")); // 16:45 - 5/05/2016