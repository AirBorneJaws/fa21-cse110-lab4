1. What was the bug?
**The bug was that the data type of result was being considered a string, so it was doing '4' + '3' which is '43'.** <br>
2. How would you fix it? Include a screenshot of your fix. <br>
**The way I would fix it would be to do the following:** <br>
**let result = pariseInt(num1,10)+parseInt(num2,10) to make sure the data type is an integer.**