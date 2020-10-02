/*a variable is a container. It can contain words, numbers, objects, lists, and much much more.
to create a variable, you use the "var" type. After "var" you select the letter/word you want
to use to call. On the right side of the = you set the value you want to be called. */


/*
--------------------------------------
WORDS, SENTENCES, AND LETTERS (STRING)
--------------------------------------
*/

var word = "apple";
var sentence = "this is a sentence";

/*When you use "word" and "sentence" next, it will act like it's the value, instead of the word,
that is called. */
alert(word); //will output "apple"
alert(sentence); // will output "this is a sentence"

/*
When you want to say something is a word, and not a number or another variable or code, you need
to use ""/``/'' at the start and end of the word/sentence. If you wan't to use double quotes inside
the word you'll need to use single quotes around the word. If you want to use single quotes inside
the word you'll need to use double quotes*/

var doubleQuotesInside = 'I need to use single quotes because double quotes ("") is used in the sentence'
var singleQuotesInside = "I need to use single quotes because single quotes ('') is used in the sentence"

/*
--------------------------------------
NUMBERS (Int, Float, Variables)
--------------------------------------
*/

/*You can also assign numbers. INT is a whole number, while FLOAT has decimal points*/
var thisIsAnInt = 2;
var thisIsAFloat = 2.22;

/*You can assign math equations as well */
var thisIsAnEquation = 3*5;

/*You can even use other variables in your variable! */
var thisIsAlsoAnEquation = thisIsAnEquation + thisIsAnInt;

/*this is currently the same as writing thisIsAlsoAnEquation = (3*5) + 2 , or thisIsAlsoAnEquation = 17*/

/*
--------------------------------------
LISTS AND DICTIONARIES (ARRAY & OBJECTS)
--------------------------------------
*/

/*We can put a list of stuff in a variable, this is called an ARRAY */
var listOfStuff = ["this", "is", "a", "list", "of stuff"];
var listOfNumbers = [0, 1, 2, 3, 4, 5, 6];
var listOfNumbersAndWords = ["a", 24, "this is a sentence", 432.3942]

/*To access certain parts of the array, you can write the name of the list, then use [] with a number
inside. This number is the place the item in the list. Remember that we start on zero!*/

listOfStuff[3] //will output "list"
listOfNumbers[2] //will output "2"

/*You can even have arrays within arrays! */

var listOfArrays = [listOfStuff, listOfNumbers];

/*To access cerain parts in the lists, we can use multiple []. The first [] will access the current
array. the next [] will acces the next */

listOfArrays[0] //will output listOfStuff
listOfArrays[0][0] //will output "this". listOfArrays[0][0] = listOfStuff[0] = "this"

/*Objects are similar to arrays, but you assign a certain value to each item
it's also common to have each key-value pair on new lines to keep it organized*/

var aPerson = {"name": "Heidi", "age":52, "gender":"female"}
var bPerson = {
    "name":"Bob",
    "age": 24,
    "gender":"male",
}

/*This removes the need of calling certain spots in certain lists, as you can call the key or value
Below you see the different ways of calling the "name" key*/
aPerson['name']; //output is "Heidi"
aPerson.name; //output is "Heidi"

/*
--------------------------------------
BOOLEANS
--------------------------------------
*/

/*A boolean is a on/off switch, which uses true/false as the output.*/

var thisIsOn = true;
var thisIsNot = false;
