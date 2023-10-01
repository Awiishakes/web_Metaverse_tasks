
// *********************************** CHAPTER 21 (Changing Case) ******************************************

// ****************** Question 1 *******************
// Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;

// *** Answer ***
    // var userInput = prompt("Enter any Thing")
    // var allLower = userInput.toLowerCase;
    // console.log(allLower)


// ****************** Question 2 *******************
// Convert the string represented by x to lower-case and assign the result to the same variable.

// *** Answer ***
    // var x = prompt("Enter some thing capital")
    // x = x.toLowerCase();


// ****************** Question 3 *******************
// Convert the string represented by y to upper-case and assign the result to the same variable.

// *** Answer ***
    // var y = prompt("Enter some thing lower")
    // y = y.toUpperCase();


// ****************** Question 4 *******************
// Convert the string represented by a variable to lower-case and assign the result to a second variable 
// that hasn't been declared beforehand.

// *** Answer ***
    // var a = "Awais"
    // var b = a.toLowerCase();


// ****************** Question 5 *******************
// Convert the string represented by an array element to lower-case and assign it to a variable that hasn't 
// been declared beforehand.

// *** Answer ***
    // var arr = ["Awais", "Nothing"]
    // var b = arr[0].toLowerCase();
    

// ****************** Question 6 *******************
// Display in an alert the upper-case version of the string represented by a variable.

// *** Answer ***
    // var a = "Nothing"
    // alert(a.toUpperCase())


// ****************** Question 7 *******************
// var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalization is the writing of a word with its first letter
// in uppercase and the remaining letters in lowercase.

// *** Answer ***
    // var cityName = "kaRacHi"
    // cityName.charAt(0).toUpperCase().concat(cityName.slice(1).toLowerCase())



// *********************************** CHAPTER 22 - 25 (Strings) ******************************************

// ****************** Question 1 *******************
// "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

// *** Answer ***
    // var sameWords = "captain"
    // console.log(sameWords.slice(1,3))


// ****************** Question 2 *******************
// The number of characters in the string will be assigned to the variable

// *** Answer ***
    // var len = "Hi Iam Awais".length


// ****************** Question 3 *******************
// The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the 
// string and assign it to the variable seg, which hasn't been declared beforehand

// *** Answer ***
    // var animal = "elephant"
    // var seg = animal.slice(2,6)


// ****************** Question 4 *******************
// Find the number of characters in the string represented by a variable and assign the number to a second variable

// *** Answer ***
    // var str = "Hi Iam Awais"
    // var len = str.length


// ****************** Question 5 *******************
// In a first statement measure how many characters there are in a string represented by a variable. 
// In a second statement slice all but the first character and last 3 characters of the string and 
// assign it to a second variable that hasn't been declared beforehand.

// *** Answer ***
    // var animal = "elephant is a good Animal"
    // var seg = animal.slice(1, animal.length-3)
    

// ****************** Question 6 *******************
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// *** Answer ***
    // var text = "To be or not to be."
    // var indx = text.indexOf("be")
    // console.log(indx)


// ****************** Question 7 *******************
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

// *** Answer ***
    // var text = "To be or not to be.";
    // var indx = text.lastIndexOf("be");
    // console.log(indx)


// ****************** Question 8 *******************
// Find the index of the first character of the last instance of "go" in the string represented by the variable text
//  and assign the number to the variable indx, which hasn't been declared beforehand

// *** Answer ***
    // var text = "I want to go toward hell did you wanna go.";
    // var indx = text.lastIndexOf("go");
    // console.log(indx)


// ****************** Question 9 *******************
// Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.

// *** Answer ***
    // var seg = "To be or not to be."
    // var text = "I want to go toward hell did not you wanna go."
    // if(text.includes(seg,seg.indexOf("not")))


// ****************** Question 10 *******************
// In this string "abcde", what character is at index 2? (Use charAt)

// *** Answer ***
    // var str = "abcde"
    // console.log(str.charAt(2))


// ****************** Question 11 *******************
// Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehan

// *** Answer ***
    // var text = "I am the MERN STACK Developer"
    // var cha = str.charAt(9)


// ****************** Question 12 *******************
// Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand

// *** Answer ***
    // var str = "I am the MERN STACK Developer"
    // var x = str.charAt(str.length-1)


// ****************** Question 13 *******************
// Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

// *** Answer ***
    // var input = "I the MERN STACK Developer"
    // var cha = input.charAt(4);


// ****************** Question 14 *******************
// Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular
// character.

// *** Answer ***
    // var input = "I the MERN STACK Developer"
    // if(input.charAt(2) !== " ")


// ****************** Question 15 *******************
// Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an 
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no" with "yes" and assign the revised 
// string to revisedReply, which hasn't been declared beforehand.

// *** Answer ***
    // var str = "I the MERN STACK Developer", arr = []
    // for (let index = 0; index < str.length; index++) 
    //     arr[index] = str[index];

    // var reply = "no, I will, no i will not";
    // var revisedReply = reply.replace("no", "yes")


// ****************** Question 16 *******************
// In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, 
// which hasn't been declared beforehand.

// *** Answer ***
    // var str = "only 1 man can do everything that is 1 man army";
    // var newStr = str.replace("1", "one")
    

// ****************** Question 17 *******************
// If you want all instances replaced, enter 3 characters that need to appear in this statement.
// var y = x.replace("a", "z");

// *** Answer ***
    // var x = "only 1 man can do everything that is 1 man army"
    // var y = x.replace(/a/g, "z")



// *********************************** CHAPTER 26 (Rounding Numbers) ******************************************

// ****************** Question 1 *******************
// Form a statement that rounds a number to the nearest integer.

// *** Answer ***
    // var num = +prompt("Enter a number")
    // alert("Rounding off to : " + Math.round(num))


// ****************** Question 2 *******************
// Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

// *** Answer ***
    // var origNum = 6.5
    // var roundNum = Math.ceil(origNum)


// ****************** Question 3 *******************
// Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

// *** Answer ***
    // var origNum = 6.5
    // var roundNum = Math.floor(origNum)


// ****************** Question 4 *******************
// Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

// *** Answer ***
    // var origNum = 6.5
    // var roundNum = Math.round(origNum)


// ****************** Question 5 *******************
// Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

// *** Answer ***
    // var origNum = .5
    // var roundNum = Math.floor(origNum)



// *********************************** CHAPTER 27 (Random Numbers) ******************************************

// ****************** Question 1 *******************
// Convert a random number generated by JavaScript to a number in the range 1 to 50

// *** Answer ***
    // var randomNum = Math.round(Math.random() * 50)
    // console.log(randomNum)


// ****************** Question 2 *******************
// Generate a random number and assign it to a variable that hasn't been declared beforehand.

// *** Answer ***
    // var randomNum = Math.random()


// ****************** Question 3 *******************
// You have to create a dice in JavaScript with the use of pseudo-random number.


// *** Answer ***
    // var randomNum = Math.round(Math.random() * 6)
    // console.log(randomNum)


// ****************** Question 4 *******************
// You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.

// *** Answer ***
    // var randomNum = Math.round(Math.random())
    // if (randomNum === 0) 
    //     console.log("Head")
    // else
    //     console.log("Tail")



// *********************************** CHAPTER 28, 29 (Converting Strings) ******************************************

// ****************** Question 1 *******************
// How do you convert a string to an integer in JavaScript?

// *** Answer ***
    // var num = parseInt("45");


// ****************** Question 2 *******************
// Write a JavaScript function to convert the string "123" to an integer.

// *** Answer ***
    // function toInteger(string){ 
    //     return parseInt(string)
    // }


// ****************** Question 3 *******************
// How can you convert a string containing a decimal number to a floating-point number in JavaScript?

// *** Answer ***
    // var num = parseFloat("2.56")


// ****************** Question 4 *******************
// How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the 
// conversion?

// *** Answer ***
    // if(typeof("2") === "string") 


// ****************** Question 5 *******************
// How can you convert a number to a string in JavaScript?

// *** Answer ***
    // var str = (4).toString()
    

// ****************** Question 6 *******************
// Write a JavaScript function to convert the number 42 to a string.

// *** Answer ***
    // function to_String(num) {
    //     return num.toString()
    // }
    // to_String(42)


// ****************** Question 7 *******************
// Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

// *** Answer ***
    // two ways to do that first is integer and second is float number
    // var num = parseInt("3.14")
    // var num = parseFloat("3.14")



// *********************************** CHAPTER 30 (Controlling the length of decimals) ******************************************

// ****************** Question 1 *******************
// Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which 
// hasn't been declared beforehand.

// *** Answer ***
    // var num = 5.89524689
    // var newNum = num.toFixed(4).toString()
 

// ****************** Question 2 *******************
// In a single statement round a number represented by a variable to 2 places, convert it to a string, 
// convert it back to a number, and assign it to the same variable.


// *** Answer ***
    // var num = 5.89524689
    // num = parseFloat(num.toFixed(2).toString())


// ****************** Question 3 *******************
// Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted 
// to a string, has more than 4 characters in it.


// *** Answer ***
    // var num = 254.566889
    // if (num.toFixed(2).toString().length > 4) 


// ****************** Question 4 *******************
// Assign a number with many decimal places to a variable.Code an alert that displays the number rounded to 2 decimal 
// places and converted to a string

// *** Answer ***
    // var num = 245.899248249284928294
    // alert(num.toFixed(2).toString())



// *********************************** CHAPTER 31 - 34 (Date & Time) ******************************************

// ****************** Question 1 *******************
// Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.

// *** Answer ***
    // var dObj = new Date()


// ****************** Question 2 *******************
// Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, 
// which hasn't been declared beforehand

// *** Answer ***
    // var dStr = new Date().toString()


// ****************** Question 3 *******************
// Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, 
// which hasn't been declared beforehand.

// *** Answer ***
    // var d = new Date()
    // var day = d.getDay()


// ****************** Question 4 *******************
// The day has been extracted from the Date object and assigned to d. The names of the days of the week have been 
// assigned to the array dayNames. Alert the current day with array index.


// *** Answer ***
    // var daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // var d = new Date().getDay()
    // alert(daysNames[d])


// ****************** Question 5 *******************
// Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.

// *** Answer ***
    // var date = new Date().toUTCString()


// ****************** Question 6 *******************
// Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, 
// which hasn't been declared beforehand.

// *** Answer ***
    // var later = new Date(2022, 11, 31)



// ****************** Question 7 *******************
// Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared 
// beforehand

// *** Answer ***
    // var later = new Date(1992, 1, 2)


// ****************** Question 8 *******************
// Code a single statement that displays in an alert the milliseconds that elapsed between the reference
//  date and the beginning of 1980.

// *** Answer ***
    // alert(new Date("January 1, 1980").getTime())
    

// ****************** Question 9 *******************
// How do you change the year of a date in JavaScript?

// *** Answer ***
    // var date = new Date().setFullYear(2021,4,5)


// ****************** Question 10 *******************
// Write a JavaScript function to change the month of a given date to January.

// *** Answer ***
    // function set_Month(date) {
    //     return date.setMonth(0,date.getDate())
    // }
    // console.log(new Date(set_Month(new Date("February 2, 2021"))).toUTCString())


// ****************** Question 11 *******************
// What is the method to change the day of the week for a specific date in JavaScript?


// *** Answer ***
    // new Date("February 4, 2022").setDate(6)


// ****************** Question 12 *******************
// Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

// *** Answer ***
    // var min = +prompt("Enter the minutes")
    // function set_min(min) {
    //     var time = new Date().setMinutes(min)
    //     return new Date(time)
    // }
    // console.log(set_min(min).toString())

// ****************** Question 13 *******************
// Write a JavaScript function to add a specific number of hours to a given time.

// *** Answer ***
    // var hr = +prompt("Enter the minutes")
    // function set_min(hr) {
    //     var time = new Date().setHours(hr)
    //     return new Date(time)
    // }
    // console.log(set_min(hr).toString())


// ****************** Question 14 *******************
// You have to create a age calculator in JavaScript.

// *** Answer ***
    // var dd = +prompt("Enter Day of birth")
    // var mm = +prompt("Enter month of birth")
    // var yy = +prompt("Enter full year of birth")
    
    // console.log(age)



// *********************************** CHAPTER 35 - 37 (Functions) ******************************************

// ****************** Question 1 *********  **********
// Code the first line of a function displayAlert.

// *** Answer ***
    // function displayAlert() 


// ****************** Question 2 *******************
// Code a function named askName that prompts the user to "Entername" and assigns the answer to userName, which hasn't been 
// declared beforehand.

// *** Answer ***
    // function askName() {
    //     var userName =  prompt("Enter name")
    // }


// ****************** Question 3 *******************
// Code a function that calls 2 other functions.

// *** Answer ***
    // function a(){}
    // function b(){}
    // function callFunc() {
    //     a()
    //     b()
    // }


// ****************** Question 4 *******************
// Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

// *** Answer ***
    // function askName() {
    //     alert(prompt("Enter name"))
    // }
    // askName()


// ****************** Question 5 *******************
// Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes 
// a variable, a string, and a number as arguments.

// *** Answer ***
    // function concat(a,b,c) {
        
    // }
    // var d ;
    // concat(d, "se", 6)


// ****************** Question 6 *******************
// Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared 
// beforehand

// *** Answer ***
    // function Concatenate(a, b) {
    //     return a.concat(b)
    // }
    // var c = Concatenate("a",5);


// ****************** Question 7 *******************
// Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.

// *** Answer ***
    // function multi(a,b,c) {
    //     return a*b*c
    // }
    // var c = multi(2,5,8)


// ****************** Question 8 *******************
// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

// *** Answer ***
    // function avg(arr) {
    //     var sum = 0
    //     for (let i = 0; i < arr.length; i++) 
    //         sum += arr[i]
    //     return sum/arr.length
    // }
    // console.log(avg([2,2,4,4]))


// ****************** Question 9 *******************
// Write a JavaScript function that takes two parameters and returns their sum.

// *** Answer ***
    // function sum(a,b) {
    //     return a+b
    // }


// ****************** Question 10 *******************
// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

// *** Answer ***
    // function avg(arr) {
    //     var sum = 0
    //     for (let i = 0; i < arr.length; i++) 
    //         sum += arr[i]
    //     return sum/arr.length
    // }
    // console.log(avg([2,2,4,4]))


// ****************** Question 11 *******************
// You have to capture the returned value from a function and store it in a variable?

// *** Answer ***
    // function sum(a,b) {
    //     return a+b
    // }
    // var ab = sum(2,5)


// ****************** Question 12 *******************
// Write a function which tells letter counts of (word).

// *** Answer ***
    // function letterCount(word) {
    //     return word.length
    // }
    

// ****************** Question 13 *******************
// Write a function to set (year) in date object.

// *** Answer ***
    // function set_year(date) {
    //     return date.setFullYear(2222)
    // }
    // console.log(new Date(set_year(new Date("February 2, 2021"))).toUTCString())


// ****************** Question 14 *******************
// Write a function which tells the age of a person who Born on (dateOfBirth)

// *** Answer ***


// ****************** Question 15 *******************
// Write a function which tells the presence of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

// *** Answer ***
    // var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
    // function search(arr, word) {
    //     return arr.includes(word)
    // }
    // console.log(search(array, "raza"))


// ****************** Question 16 *******************
// Write a function which repeat (letter) 10 times.

// *** Answer ***
    // function loop(word, times) {
    //     return word.repeat(times)
    // }
    // console.log(loop("Word", 8))


// ****************** Question 17 *******************
// write a function which reverse array = ['a','b','c','d','e']

// *** Answer ***
    // var array = ['a','b','c','d','e']
    // function revers(arr) {
    //     return arr.reverse()
    // }



// *********************************** CHAPTER 38 (Local vs. Global Variables) ******************************************

// ****************** Question 1 *******************
// Write a JavaScript function that demonstrates the usage of a local variable.

// *** Answer ***
    // function a() {
    //     var ab = 5
    // }
    // console.log(ab)


// ****************** Question 2 *******************
// How can you access a global variable inside a function in JavaScript?

// *** Answer ***
    // var ab = 5
    // function a() {
    //     console.log(ab)
    // }
    // a()



// *********************************** CHAPTER 39, 40 (Switch Statements) ******************************************

// ****************** Question 1 *******************
// Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

// *** Answer ***
    // var a = 6
    // switch (a) {
    //     case 2:
    //             console.log("hello")
    //         break;
    //     case 4:
    //             console.log("World")
    //         break;
    //     case 6:
    //             console.log("madam")
    //         break;
    //     default:
    //             console.log("nothing")
    //         break;
    // }


// ****************** Question 2 *******************
// Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and 
// break the statement, if not default message will be shown to user.
    
// *** Answer ***
    // var cityName = prompt("Enter City Name")
    // switch (cityName.toLowerCase()) {
    //     case "karachi":
    //             alert("Matched")
    //         break;        
    //     case "hyderabad":
    //             alert("Matched")
    //         break;
    //     case "islamabad":
    //             alert("Matched")
    //         break;
    //     default:
    //         alert("No Match")
    //         break;
    // }

