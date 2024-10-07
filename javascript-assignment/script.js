// CHAPTER : 3    Variables for Numbers

// Question : 1

// Declare a variable height and assign the value 170 to it. Then, add 10 to height and store the result in a new variable newHeight. Display an alert with the new value.

let height = 170;
let newHeight = height + 10;
alert("New Height: " + newHeight);

// Question : 2

//  Declare two variables, num1 and num2, and assign them values of 50 and 30, respectively. Create a new variable sum that stores the sum of num1 and num2, and display the sum in an alert.

let Num1 = 50;
let Num2 = 30;
let SUM = Num1 + Num2;
alert("Sum: " + SUM);

// Question : 3

// Declare a variable numToBeAdded with the value 20. Then use the following code: Display total1 in an alert. What is the value of total1?let numToBeAdded = 20;

let numToBeAdded = 20;
alert(numToBeAdded);

// Question : 4

//  Declare a variable price with the value 120. Now add tax (10%) to price and display the total price in an alert.

let price = 120;
let tax = price * 0.10; // Calculating 10% tax
let totalPrice = price + tax;
alert("Total Price with Tax: " + totalPrice);




// chapter 4  Variables for Numbers

// question : 1

// Write code to create a variable myAddress and assign it your city name. Ensure your variable name follows camelCase naming convention, and then display the value in an alert.

let myAddress = "Karachi";
alert(myAddress);

// question : 2

// Write code to declare three variables using camelCase: userName, userEmail, and userPassword. Assign them appropriate string values and display them together in an alert.

let useerName = "sadaf urooj";
let userEmail = "sadafurooj@example.com";
let userPassword = "pakistan123";

alert("Useername: " + useerName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);

// question : 3

// Declare a variable userAddress that contains spaces (i.e., try naming it like user address) and observe what happens. Then correct the name using camelCase and display the value in an alert.

// let user address = "123 Main Street, Karachi, Pakistan"; // This will result in a syntax error

let userAddress = "123 Main Street, Karachi, Pakistan"; // this one is correct

alert(userAddress);

// question : 4

// Create a variable rose and assign it a value "Floribundas". Then, try accessing the variable using Rose (uppercase) and see what happens. Display both results

let rose = "Floribundas";

console.log(rose); // Output: Floribundas
console.log(Rose); // Output: ReferenceError: Rose is not defined

// chapter : 5 Math expressions: Familiar operators

// question : 1

// Write a JavaScript statement that adds two numbers, 25 and 30, and assigns the result to a variable called sum. Then display the value in an alert.  

let sum = 25 + 30;
alert(sum);


// Question 2

// Create a variable num1 and assign it the value 25. Create another variable num2 and assign it the value 5. Add both variables and store the result in a new variable called sum. Display the result in an alert

let num1 = 25;
let num2 = 5;
let Sum = num1 + num2;
alert(Sum);

// Question 3

// Write a statement that assigns the remainder of 27 divided by 4 to a variable called modulusResult. Then display the value in an alert.
 

let modulusResult = 27 % 4;
alert(modulusResult);

// CHAPTER : 6 .Math expressions: Unfamiliar operators

// Question 1

// Initialize a variable num with the value 3. Use the post-increment (num++) operator and assign the result to a new variable newNum. Display both num and newNum in alerts.

let num = 3;
let newNum = num++;
alert("num: " + num);
alert("newNum: " + newNum);

// Question 2

// Write a program that initializes a variable counter with the value 10. Use counter++ twice in your code, then display the final value of counter in an alert.

let counter = 10;
counter++;
counter++;
alert("counter: " + counter);

// Question 3

// Initialize a variable points with the value 20. Use the post-decrement operator (points--) and the pre-increment operator (++points) in separate statements. Display the final value of points in an alert.

let points = 20;
points--;
++points;
alert("points: " + points);

// Question 4

// Write a program that initializes a variable number with the value 0, uses ++number three times in your code, and then displays the final value of number in an alert.

let nuumber = 0;
++nuumber;
++nuumber;
++nuumber;
alert("number: " + nuumber);

// CHAPTER : 7 Math expressions: Eliminating ambiguity


//Question 1:

//Combine parentheses and the modulus operator to first calculate the remainder of 20 % 6 before performing the other arithmetic operations. What is the value of calculation?

let calculation = (20 % 6) * 2;
console.log("calculation:", calculation);

//Question 2:

//Write an expression that calculates (6 + 2) * (5 - 3), and determine the value of expressionValue.

let expressionValue = (6 + 2) * (5 - 3);
console.log("expressionValue:", expressionValue);

//Question 3:

//What is the value of finalTotal in the following expression, and how does operator precedence apply here?

let finalTotal = 10 + 5 * 2;
console.log("finalTotal:", finalTotal);

//Question 4:
//Evaluate the value of answer and determine how JavaScript processes the following expression:

let answer = 15 / 3 * 2 + 1;
console.log("answer:", answer);

//chapter : 8 Prompts

// question : 1

// Write a script that asks the user, "What is your name?" and stores the answer in a variable userName. Then, display an alert that says "Hello, [userName]!".

let userName = prompt("What is your name?");
alert("Hello, " + userName + "!");

// question : 2

// Create a prompt that asks the user, "How old are you?" and assigns the response to a variable age. Display an alert that says "You are [age] years old." Handle the case where the user clicks "Cancel" by displaying "No age provided" in the alert.

let age = prompt("How old are you?");
if (age !== null) {
  alert("You are " + age + " years old.");
} else {
  alert("No age provided.");
}

// question : 3

// Write a prompt asking, "How many pets do you have?" and assign the response to a variable pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter anything."

let pets = prompt("How many pets do you have?");
if (pets === null || pets === "") {
  alert("You didn't enter anything.");
}

// question : 4

//Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a number, then multiply it by 2 and display the result in an alert.

let number = prompt("Enter a number between 1 and 10");
if (number !== null && number !== "") {
  number = parseInt(number);
  if (number >= 1 && number <= 10) {
    alert(number * 2);
  } else {
    alert("Please enter a number between 1 and 10.");
  }
} else {
  alert("You didn't enter anything.");
}

// question : 5

//Write a prompt that asks the user, "What is your favorite number?" and assigns the response to a variable favNum. If the user does not provide a response and clicks "OK", assign a default value of 7 to favNum and display it in an alert.

let favNum = prompt("What is your favorite number?");
if (favNum === null || favNum === "") {
  favNum = 7;
}
alert("Your favorite number is " + favNum + ".");

// chapter : 9 if statements

// question : 1

// Prompt and If Statement: Write a script that asks the user "What is the capital of France?" If the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try again!"

let capitalOfFrance = prompt("What is the capital of France?");
if (capitalOfFrance === "Paris") {
  alert("Correct!");
} else {
  alert("Try again!");
}

// question : 2

// f-Else Statement: Modify the previous script to use an else statement. If the user's answer is correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."

let capitalofFrance = prompt("What is the capital of France?");
if (capitalofFrance === "Paris") {
  alert("Correct!");
} else {
  alert("Incorrect, the correct answer is Paris.");
}

// question : 3

// Multiple Correct Answers: Write a program that asks the user, "What is the capital of the United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an if-else condition to check both possible answers.

let capitalOfUK = prompt("What is the capital of the United Kingdom?");
if (capitalOfUK === "London" || capitalOfUK === "The United Kingdom") {
  alert("Correct!");
} else {
  alert("Incorrect, the correct answer is London or The United Kingdom.");
}

// question : 4

// Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every time the user answers a question correctly, increment the score by 1 and display the updated score

let score = 0;
let CapitalOfFrance = prompt("What is the capital of France?");
if (CapitalOfFrance === "Paris") {
  alert("Correct!");
  score++;
} else {
  alert("Try again!");
}
alert("Your score is: " + score);

// question : 5

// Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You got both right!". If only one answer is correct, display "You got one correct!".

let capitalOfGermany = prompt("What is the capital of Germany?");
let mathQuestion = prompt("What is 10 + 10?");
let correctAnswers = 0;
if (capitalOfGermany === "Berlin") {
  correctAnswers++;
}
if (mathQuestion === "20") {
  correctAnswers++;
}
if (correctAnswers === 2) {
  alert("You got both right!");
} else if (correctAnswers === 1) {
  alert("You got one correct!");
} else {
  alert("You got none correct!");
}