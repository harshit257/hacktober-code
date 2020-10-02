/* For-loops, While-loops, and if/else is all ways we can control our code.
Understanding and using them correctly will make it easier to write code, and 
can remove houndreds of lines*/

/*some variables we'll be using for examples*/

//this is an object
var personA =
{
    "name":"bob",
    "age":26,
    "gender":"male",
};

//this is an object
var personB =
{
    "name":"heidi",
    "age":64,
    "gender":"female",
};

//this is an array
var people = [personA, personB];


//this is a number
var number = 5;


/*
--------------------------------------
OPERATORS
--------------------------------------
To understand IF/ELSE, WHILE, and FOR, it's important to understand how the operators work.

+   : adding
+=  : adding to the sum and assigning new value
-   : subtracting
-=  : subtracting to the sum and assigning the new value
*   : multiplying
*=  : multiplying to the sum and assigning the new value
/   : dividing
/=  : dividing to the sum and assigning the new value
%   : modulus, returns remainder. ex 5%2 = 1, as 5:2 is 2*2 + 1
%=  : getting the modulus of the sum and assigns the new value 
++  : adding one to the previous number
--  : subtracting one to the previous number

=   : assigning value
==  : Comparison between two values, not considering types (float, int, string etc)
=== : Comparison between two values, considering type
!=  : Comparing to see if it's not equal
>   : left is greater than right. 
<   : right is greater than left.
>=  : left is greater or equal to right
<=  : right is greater or equal to left

&&  : AND
||  : OR
!   : NOT


/*
--------------------------------------
IF/ELSE
--------------------------------------
IF/ELSE is a way for us to say "If this is correct, please do this thing" "else, do this thing"

*/

if (number === 5){
    alert("THE NUMBER IS FIVE!")
}
else{
    alert("THE NUMBER IS NOT FIVE")
}

/*This if/else statement says that if the variable "number" is equal to 5, it will give
the user an alert saying that the number is five. if the number is not five, it will alert 
the user that the number is not five. */

if(personA["name"] === "bob"){
    alert("YOUR NAME IS BOB"); //if the name is bob, it'll alert you
}
else if(personB["name"] === "heidi"){
    alert("YOUR NAME IS HEIDI") //if the name isn't bob, but it is heidi, it'll alert you
}
else{
    alert("NOT A VALID NAME") //if neither is correct, it'll do this 
}

/*this if/else if/else statement checks the dictionary and compares the value of the "name"-key
to the value. You can only have one if and one else in the same statement, but you can have 
multiple else if's to add multiple conditions. It's important to know that your code will
read from the top down, so that if your requirement is fulfilled, it won't check the rest of 
the else if's or else statements. */

if(personA["name"] === "bob"){
    alert("YOUR NAME IS BOB"); // The statement is completed
}
else if(personA["name"] === "bob"){
    alert("YOUR NAME IS BOB BUT THIS WON'T APPEAR") // This won't be checked
}
else{
    alert("NOT A VALID NAME") // This won't be checked
}

/*
--------------------------------------
FOR LOOP
--------------------------------------
A difficult concept to wrap your head around, but oh so useful.

A for-loop is something that will run in circles untill the criteria is fulfilled. At a certain
point in every loop it'll do something.

*/

for(i=0; i<10; i++){
    alert(i)
}

/*This is a typical layout of a for-loop. i can be named anything (num, word), but it's most common
to use i. you can also use an external variable.

i=0    : we say that i shall have the value of zero before the loop starts
i<10   : the loop will run as long as i is less than 10
i++    : after the loop we will add one to the number of i

{alert(i)}   : within {} you can define what will happen each time the loop will run. Here we will
alert the user with the current number i is.
*/

for(i=0; i<10; i++){
    alert(i)
}

/*
Output:
i=0 : alert(0)  <--- We're setting i=0 as our first value in the loop, so the first time we run alert(i) i will show as zero
i=1 : alert(1)  <--- After we run the loop, we're adding 1 to i. So this time alert(i) will output 1
i=2 : alert(2)  <--- After we run the loop, we're adding 1 to i. So this time alert(i) will output 2
i=3 : alert(3)  <--- ....
i=4 : alert(4)  <--- ....
i=5 : alert(5)  <--- ....
i=6 : alert(6)  <--- ....
i=7 : alert(7)  <--- ....
i=8 : alert(8)  <--- ....
i=9 : alert(9)  <--- ....
i=10 : X <--- // this loop won't run, as i=10, and the loop will only run as long as i is less than 10.
                10 is not less than 10, so the loop is done
*/

/*This is not only useful for printing out numbers, but for looking into Arrays and other fun things! 
Remember out people-array with two person-dictionaries? What if we want to look at every
element in the array, and alert all the names?*/

for(i=0; i<people.length; i++){
    alert(people[i]["name"])
}

/*
the lenght of the people-array is 2, as it contains two items. We could've written i<2, but
using the lenght we can add more people without having to change our code.

Output:
i=0 : alert(person[0]["name"])  : alert(personA["name"])  : alert("bob")
i=1 : alert(person[1]["name"])  : alert(personB["name"])  : alert("heidi")
i=2 : X <--- // this loop won't run, as i=2, and the loop will only run as long as i is less than 2.
                2 is not less than 2, so the loop is done
*/

/*We can even have if/else inside a for-loop! */

for(i=0; i<people.length; i++){
    if(people[i]["name"] === "bob"){
        alert("YOUR NAME IS BOB!")
    }
    else{
        alert("YOUR NAME IS NOT BOB")
    }
}

/*
Output:
i=0 : if(people[0]["name"] === "bob")  :  if(personA["name"] === "bob"  : "bob" === "bob") --> "YOUR NAME IS BOB!"
i=1 : if(people[1]["name"] === "bob")  :  if(personB["name"] === "bob"  : "heidi" === "bob") --> "YOUR NAME IS NOT BOB"
i=2 : X <--- // this loop won't run, as i=2, and the loop will only run as long as i is less than 2.
                2 is not less than 2, so the loop is done
*/

/*
--------------------------------------
WHILE LOOP
--------------------------------------
Similar to for-loop, but it will run infinitly untill a criteria is fulfilled/unfulfilled

*/
var password = "apple"
var userInput = ""


while(userInput != password){
    
     userInput = prompt("please write the password")
}

/*This is a simple loop where we'll continue to run the code and ask the user to 
write a password untill the userInput is equal to the password. The While is set to run
as long as the input is not equal to the password.

If we used an if/else for this, it would've checked it once, found that "" does not equal "apple",
then asked the user to write the password. No matter if the user writes the wrong or right password, 
the prompt willdisappear and you can't write the password again*/

var gameOn = true;

while(gameOn === true){
    var password = "apple";
    var userInput = prompt("please write the password");
    
        if (userInput === password){
            gameOn = false;
        }
}


/*Same result, different method. We've defined a boolean variable we'll have to activly turn
off to get out of the loop. As we're not comparing any variables, we can declare them within the
loop. */