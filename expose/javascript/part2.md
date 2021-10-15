1. What will happen at line 12 and why? If the code causes an error, explain why.  <br>
**3 will be displayed to the console because i is a var and is still visible after the loop due to it being a global variable** 
2. What will happen at line 13 and why? If the code causes an error, explain why.  <br>
**150 will be displayed to the console because discountedPrice is a var and is still visible after loop due to it being a global variable**
3. What will happen at line 14 and why? If the code causes an error, explain why.  <br>
**150 will be displayed to the console because finalPrice is not only a var variable, but it was also declared outside of the loop above it**
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. <br>
**The function will return the array [50,100,150] as an array discounted was created and finalPrice was pushed into it in the for loop**
5. What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)). <br>
**The code would cause an error because i is not defined in line 12 due to it being a let and only being defined within the scope of the for loop**
6. What will happen at line 13 and why?  If the code causes an error, explain why.<br>
**The code would cause an error because discountedPrice is not defined in line 13 due to it being a let and only being defined within the scope of the for loop**
7. What will happen at line 14 and why?  If the code causes an error, explain why. <br>
**150 will be displayed to the console because finalPrice is not only a var variable, but it was also declared outside of the loop above it**
8. What will this function return? Give a brief explanation why. If the code causes an error, explain why. <br>
**The function will return the array [50,100,150] as an array discounted was created and finalPrice was pushed into it in the for loop. The let changes in the forloop did not affect it.**
9. What will happen at line 11 and why? If the code causes an error, explain why. <br>
**The code would cause an error because i is not defined in line 11 due to it being a let and only being defined within the scope of the for loop**
10. What will happen at line 12 and why? If the code causes an error, explain why. <br>
**3 will be displayed to the console as length is set to prices.length, meaning it is a constant value and cannot be reassigned. Furthermore, since the array that was passed in as a parameter has 3 elements, its length is 3**
11. What will this function return? Give a brief explanation. If the code causes an error, explain why. <br>
**The function will return the array [50,100,150] as an array discounted was created and discountedPrice was pushed into it in the for loop. Const for arrays in JS do not define a constant array but rather define a constant reference to the array in question, which is why push is able to mutate the elements**
12. <br>
**A) student.name;** <br>
**B) student["Grad Year"];** <br>
**C) student.greeting.call();** <br>
**D) student["Favorite Teacher"].name;** <br>
**E) student.courseLoad[0];**
13. Arithmetic <br>
**A. 32** <br>
**B. 1** <br>
**C. 3** <br>
**D. 3null** <br>
**E. 4** <br>
**F. 0** <br>
**G. 3undefined**<br>
**H. Nan** 
14. Comparison <br>
**A. true** <br>
**B. false** <br>
**C. true** <br>
**D. false**<br>
**E. false**<br>
**F. true** 
15. **The triple equal sign (===) means strict equality, in other words, both the type and value has to match. However, the double equal sign (==) means loost equality, in other words, type coercion will be performed to try and equate the expression. For example, false===0 will be obviously false, as one is a boolean and the other an int, however, with false==0, we get true.** <br>
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. <br>
**The result will be [2,4,6]. We will call the modifyArray with the 1st parameter passing the [1,2,3] array and the second parameter will be the doSomething function. Inside the modifyArray function, a newArr will be initialized and based on the length of the array, the doSomething(num) functions resulsts will be pushed into it. Every time the for loop runs, it enters the doSomething(num) function by passing a new element each time until it reached the max length. Thus, 1 gets passed into doSomething and a 2 is returned and pushed into newArr, 2 gets passed and a 4 is returned and pushed, 3 gets passed and a 6 is returned and pushed.** <br>
19. What is the output of the above code? (This should be in your part2.md) <br>
**The output of this code is as follows:** <br>
**1**<br>
**4**<br>
**3**<br>
**2**<br>



