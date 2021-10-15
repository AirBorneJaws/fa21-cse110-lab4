let d = new Date();
let time = d.toLocaleTimeString();
var intervalID = setInterval(myCallback, 1000);

function myCallback()
{
console.log(time);
}