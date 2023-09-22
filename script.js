// STEP 1 Convert the following highlighted identifiers to Camel Case notation:
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let MyLibraryFunction

// STEP 2
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// Numeric let x = 0, y = 0;
// String  let name = "Jylian";
// Boolean let isValid = true;
// Null let number = null

// STEP 3
// Give me two examples of complex / variable expressions.
// x = 10, y = 5

//STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: (Use Camel Casing and Hungarian Notation when naming your identifiers.)    )
// let firstName
// let strLastName
// let address
// let city
// let strState
// let zipCode
// let yourAge
// let strReferralSource
// let mayWeContactYou 

//STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let First Name = firstName
// alert(firstName) = First Name
// let x = firstName
// let Last Name = lastName
// alert(lastName) = Last Name
// let name = lastName
// let Address = address
// alert(address) = Address
// let address = ""

//STEP 6
// Create a variable
// let x = 7;
// let y = 6;
// let z = x + y;

//STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// "x" == "x";
// console.log(Boolean("x"));
// "true" == (true.toString());
// console.log("true" == true)

// For the second variable, add a number and a Boolean and display the coerced result.
// let number = 6
// let isValid = true
// console.log(number+isValid)

//STEP 8
// Is the following string literal valid? No If not, how would you fix it? See below.

// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

//STEP 9
// Create a variable that produces a null value in the console window.
// let number = null
// Then, create a variable that produces an undefined value in the console window.
// function apple(a) {
//     if (a === undefined) {
//         return 'Undefined value';
//     }
//     return a;
// }
// let x;

// console.log(apple(x));

//STEP 10
// Use the unary typeof operator on various literals to return the following types within the console window: 
// String:
// a1 = '456'
// console.log('type:' + typeof a1)
// console.log('amount:' + a1)

// Number: 
// a1 = '45.23'
// console.log('type:' + typeof a1)
// console.log('amount:' + a1)

// Boolean:  
// a1 = false;
// console.log('type:' + typeof a1) 
// console.log('value:' + a1)

// Object:   
// a1 = { name:'Jylian'}
// console.log('type:' + typeof a1); 
// console.log('value:' + a1.name);

// Undefined: 
// console.log('type: ' + typeof a8)

//STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// let name = 'Zak Ruvalcaba'
// let className = 'JavaScript'
// console.log(' Hello, ' + name + ' welcome to the ' + className +' class!')

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// let name = 'Jylian Summers'
// let className = 'JavaScript'
// console.log(' Hello, ' + name + ' welcome to the ' + className +' class!')

//STEP 12
// Declare a variable called name and set it equal to your name.
// let name = Jylian
// Substitute your name in the previous alert string with the variable instead.
// let className = 'JavaScript'
// console.log(' Hello, ' + name + ' welcome to the ' + className +' class!')

//STEP 13
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let course = 'JavaScript'
// let name = 'Jylian'
// let greeting = 'welcome to the'
// console. log('Hello, ' + name, '' + greeting, '' + course, 'class.')

//STEP 14 
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
// let str = "Hello Zak Ruvalcaba.\nWelcome to the Javascript class!"
// console.log(str)

//STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// alert = 'What is your name?'
// let className = 'JavaScript'
// console.log(' Hello, ' + alert + ' Welcome to the ' + className +' class!')

//STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// alert = 'What is your name? '
// prompt = 'What class are you taking?'
// console.log(' Hello, ' +  alert  +  prompt)

//STEP 17
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.
// let x = 10
// let y = 20
// let z = x + y
// console.log(x + y)

//STEP 18
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
// let x = 20
// console.log(x + 20)

//STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
// let x = 20
// console.log(x * 5)

//STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
// let remainder = 3 % 20 -1
// console.log(remainder)  //remainder is 2

//STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let x = 5
// let y = '5'
// console.log(x == y)

//STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the 
// console window. The application cannot use the same operators used in the previous application.
// let x = 2
// let y = '5'
// console.log(x == y)

