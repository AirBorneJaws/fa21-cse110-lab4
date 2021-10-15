1. What will happen at line 12 and why? If the code causes an error, explain why. 
**3 will be displayed to the console because i is a var and is still visible after the loop due to it being a global variable** 
2. What will happen at line 13 and why? If the code causes an error, explain why. 
**150 will be displayed to the console because discountedPrice is a var and is still visible after loop due to it being a global variable**
3. What will happen at line 14 and why? If the code causes an error, explain why. 
**150 will be displayed to the console because finalPrice is not only a var variable, but it was also declared outside of the loop above it**
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
**The function will return the array [50,100,150] as an array discounted was created and finalPrice was pushed into it in the for loop**
5. What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
**The code would cause an error because i is not defined in line 12 due to it being a let and only being defined within the scope of the for loop**
6. What will happen at line 13 and why?  If the code causes an error, explain why.
**The code would cause an error because discountedPrice is not defined in line 13 due to it being a let and only being defined within the scope of the for loop**
7. What will happen at line 14 and why?  If the code causes an error, explain why.
**150 will be displayed to the console because finalPrice is not only a var variable, but it was also declared outside of the loop above it**
8. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
\ **The function will return the array [50,100,150] as an array discounted was created and finalPrice was pushed into it in the for loop. The let changes in the forloop did not affect it.**
9. What will happen at line 11 and why? If the code causes an error, explain why.
**The code would cause an error because i is not defined in line 11 due to it being a let and only being defined within the scope of the for loop**
10. What will happen at line 12 and why? If the code causes an error, explain why.
**3 will be displayed to the console as length is set to prices.length, meaning it is a constant value and cannot be reassigned. Furthermore, since the array that was passed in as a parameter has 3 elements, its length is 3**
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
**The function will return the array [50,100,150] as an array discounted was created and discountedPrice was pushed into it in the for loop. Const for arrays in JS do not define a constant array but rather define a constant reference to the array in question, which is why push is able to mutate the elements**
12. **A) student.name;**
**B) student["Grad Year"];**
**C) student.greeting.call();**
**D) student["Favorite Teacher"].name;**
**E) student.courseLoad[0];**



