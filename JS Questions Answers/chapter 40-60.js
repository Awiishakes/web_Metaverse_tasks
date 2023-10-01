// *********************************** CHAPTER 41, 42 (while loops, do…while loops) ******************************************

// ****************** Question 1 *******************
// Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.

// *** Answer ***
    // let i = 0
    // while (i<=1) {
    //     i++
    // }


// ****************** Question 2 *******************
// Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the 
// length of the array as the loop limiter. Break out of the loop when it's found.

// *** Answer ***
    // let animal = ["horse", "ox", "cow", "pig", "duck"];
    // for (let i = 0; i < animal.length; i++) {
    //     if (animal[i] === "pig") {
    //         alert("Found it")
    //         break;
    //     }
    // }


// ****************** Question 3 *******************
// Code to use a while & do while loop to print the numbers from 1 to 10.

// *** Answer ***
    // let i = 0, j = 0
    // do{
    //     console.log(i)
    //     i++
    // }while (i<=10) 

    // while (j<=10) {
    //     console.log(j)
    //     j++
    // }


// ****************** Question 4 *******************
// To use a while loop to ask the user for a number and then print that number back to them.

// *** Answer ***
    // while (true) {
    //     let num = +prompt("Enter a Number")
    //     alert(num)
    // }


// ****************** Question 5 *******************
// To use a while loop to check if a number is even or odd.

// *** Answer ***
    // let num = +prompt("Enter a Number")
    // while (true) {
    //     if (num % 2 === 0) {
    //         alert("This is an Even number")
    //         break
    //     }else{
    //         alert("This is an Odd number")
    //         break
    //     }
    // }

    
// ****************** Question 6 *******************
// Create a guessing game where the user has to guess a number between 1 and 100.

// *** Answer ***
    // let num = parseInt(Math.random() * 100) 
    // do{
    //     var guessNum = +prompt("Guess a Number b/w 0 and 100")
    //     if (guessNum === num) 
    //         alert("Congrats you Won \n the original number is : "+num)
    //     else
    //         alert("Oops! You loose try again")
    // }while (guessNum !== num)


// ****************** Question 7 *******************
// Use a while & do-while loop to create a countdown timer?

// *** Answer ***
    // let sec = +prompt("Enter the seconds for countdown")
    // while (sec !== 0) {
    //     setInterval(() => {
    //         console.log(sec)
    //     }, 1000);
    //     sec--
    // }



// *********************************** CHAPTER 46, 48 (Events) ******************************************

// ****************** Question 1 *******************
// Create a simple event that prints a message when the user clicks on an element.

// *** Answer ***
    // document.getElementById('btn').onclick = function(){
    //     document.getElementById('para').innerHTML = "Hello Iam Message" 
    // }


// ****************** Question 2 *******************
// Create an event that hides an element when the user clicks on a different element

// *** Answer ***
    // document.getElementById('btn').onclick = function(){
    //     document.getElementById('para').style.display  = "none"
    // }


// ****************** Question 3 *******************
// Create a link that changes color when the user hovers over it and then back to its original color 
// when the user moves the mouse away.

// *** Answer ***
    // function onOver(event) {
    //     event.target.style.color = 'red'
    // }
    // function onOut(event) {
    //     event.target.style.color = 'blue'
    // }


// ****************** Question 4 *******************
// Create an event that scrolls to the top of the page when the user clicks on a link.

// *** Answer ***
    // document.getElementById('click').onclick = function() {
    //     document.documentElement.scrollTop = 0
    // }


// ****************** Question 5 *******************
// Create a link that plays a sound when the user clicks on it.

// *** Answer ***
    // function onClick() {
        
    // }
    

// ****************** Question 6 *******************
// Create a simple link that opens a new window when clicked.

// *** Answer ***
    // function onClick() {
    //     window.open('index')
    // }


// ****************** Question 7 *******************
// Create a simple button that alert a message when clicked.

// *** Answer ***
    // function Alert() {
    //     alert("Hello button")
    // }


// ****************** Question 8 *******************
// Create a button that changes color when the user hovers over it.

// *** Answer ***
    // function hover() {
    //     document.getElementById('btn').style.background = 'red'
    // }


// ****************** Question 9 *******************
// Create a button that plays a sound when the user clicks on it.

// *** Answer ***


// ****************** Question 10 *******************
// Create an event that alert a message when the user moves the mouse over an element.

// *** Answer ***
    // function hover() {
    //     alert("This is hover message")
    // }


// ****************** Question 11 *******************
// Create an event that hides an element when the user moves the mouse out of it.

// *** Answer ***
    // function out() {
    //     document.getElementById('para').style.display = 'none'
    // }


// ****************** Question 12 *******************
// Create a link that opens a new window when the user clicks on it and then closes the window when the user 
// clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.

// *** Answer ***



// *********************************** CHAPTER 49, 50 (Reading and Setting field values) ******************************************

// ****************** Question 1 *******************
// Read the value of a user Input and print it to the console.

// *** Answer ***
    // function change(event) {
    //     var a = event.target.value
    //     console.log(a) // press enter to see value
    // }


// ****************** Question 2 and 3 *******************
// Read the value of a checkbox and print it to the console

// *** Answer ***
    // function isChecked(event) {
    //     if (event.target.checked === true) {
    //         console.log(event.target.value)
    //     }
    // }


// ****************** Question 4 *******************
// Ask the user about Martial Status. If the variable married is false, 
// place the value "available" in the field with the id "status"

// *** Answer ***
    // function isChecked(event) {
    //     if (event.target.checked === false) {
    //         document.getElementById('status').setAttribute('value','available')
    //     }
    // }



// *********************************** CHAPTER 51 (Reading and Setting paragraph text) ******************************************

// ****************** Question 1 *******************
// How can I create a paragraph that expands when the user clicks on a Show More?

// *** Answer ***
    // function showMore(event) {
    //     event.target.style.color = 'black'
    //     event.target.style.cursor = 'text'
    //     event.target.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis dignissimos deleniti animi et eius ut natus eum quam! Amet, soluta.'
    // }


// ****************** Question 2 *******************
// Read the text of a paragraph and use it to search for a specific word or phrase.

// *** Answer ***
    // let word = prompt("ENter the word for search")
    // if (document.getElementById('para').innerText.includes(word)) {
    //     alert("your word found on : " + document.getElementById('para').innerText.search(word) + ' index')
    // }else
    //     alert("No found")


// ****************** Question 3 *******************
// Read the text of a paragraph and use it to find the longest word.

// *** Answer ***
    // let arr = document.getElementById('para').innerText.split(' '), element = ''
    // for (let i = 0; i < arr.length; i++) {
    //     if (element.length < arr[i].length) 
    //         element = arr[i]
    //     else
    //         continue
    // }
    // console.log(element)


// ****************** Question 4 *******************
// Set the text of a paragraph to the value of a text field, but only if the value is not empty.

// *** Answer ***
    // function change(event) {
    //     if (event.target.value !== null) {
    //         document.getElementById('para').innerText = event.target.value  
    //     }
    // }


// ****************** Question 5 *******************
// Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.

// *** Answer ***
    // function change(event) {
    //     if (event.target.value.toString().includes('awais')) {
    //         document.getElementById('para').innerText = event.target.value  
    //     }
    // }


// ****************** Question 6 *******************
// Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.

// *** Answer ***
    // function change(event) {
    //     if (event.target.value.toString().length < 9) {
    //         document.getElementById('para').innerText = event.target.value  
    //     }
    // }



// *********************************** CHAPTER 52 (Manipulating Images and Text) ******************************************

// ****************** Question 1 *******************
// When the user clicks on the sentence, it turns bold.

// *** Answer ***
    // function Click(event) {
    //     event.target.style.fontWeight = 'bolder'
    // }


// ****************** Question 2 *******************
// How can I make an image disappear when the user hovers over it and show text instead? 
// When the user hovers off the image, the original image should reappear.

// *** Answer ***
    // function hover(event) {
    //     event.target.style.display = 'none'
    //     document.getElementById('para').style.visibility = 'visible'
    // }
    // function out(event) {
    //     event.target.style.display = ''
    // }

// ****************** Question 3 *******************
// When the user mouses over the heading, its background turns black, but it retains its original light gray color

// *** Answer ***
    // function hover(event) {
    //     event.target.style.backgroundColor = 'black'
    // }
    // function out(event) {
    //     event.target.style.backgroundColor = 'lightGray'
    // }


// ****************** Question 4 *******************
// When user hover to a paragraph, Add a underline style to text.

// *** Answer ***
    // function hover(event) {
    //     event.target.style.textDecoration = 'underline'
    // }


// *********************************** CHAPTER 52 (Swapping Images) ******************************************

// ****************** Question 1 *******************
// Swap the images when the user clicks on a button.

// *** Answer ***
    // function Click() {
    //     if (document.getElementById('img').getAttribute('src') === 'torch_on.png') 
    //         document.getElementById('img').setAttribute('src','torch_off.png')
    //     else            
    //         document.getElementById('img').setAttribute('src','torch_on.png')
    // }