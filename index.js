/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!*/
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.


let age = [3, 9, 23, 64, 2, 8, 28, 93];
var lastElement = age[age.length-1];
var firstElement = age[0];

console.log('Subtracted value = ' + (lastElement - firstElement));

let newAge = 50;
age.push(newAge);
console.log(age)
var lastElement = age[age.length-1];
var firstElement = age[0];

console.log(lastElement-firstElement);

sum = 0

for (i = 0; i < age.length; i++){
    sum += age[i];
}
average = sum / age.length;
console.log("Average age calculated =" + average)


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Use a loop to iterate through the array and calculate the average number of letters per name. 
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 



let names = ['Sam', 'Tommy', "Tim", 'Sally', 'Buck', 'Bob']
sum=0;
for( i = 0; i < names.length; i++){
    sum += names[i].length;
}
average = sum / names.length;
console.log('The average number of letter per name = ' + average);
 
nameString = "";

for( i = 0; i < names.length; i++){
    nameString = nameString + " " + names[i];
}
console.log('The concatenated names = ' + nameString);


//How do you access the last element of any array?

// By calculating the index of last element using array.length-1, and then using this index to get that index element from array. e.g. array[array.length-1]


//How do you access the first element of any array?

// By using index as 0 for getting element from array. e.g. array[0]

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];

for( i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log('The lengths of names = ' + nameLengths);


//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

sum = 0

for (i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}

console.log(sum)

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function myFunction (word, n) {
    concatWord = "";
    for(i=1; i <= n; i++){
        concatWord = concatWord + word;
    }
    return(concatWord)
}

console.log(myFunction("Hello", 3))

//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName){
    return(firstName + ' ' + lastName)
}
console.log(fullName('Madhu', 'Kumari'))



//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function checkSum(newArray){
    sum = 0
    for(i=0; i<newArray.length; i++){
        sum += newArray[i];
    }
    if(sum>100){
        return(true)
    }else{
        return(false)
    }
}

console.log(checkSum(age))
console.log(checkSum(nameLengths))

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numAverage(newArray){
    sum = 0
    for (i = 0; i < newArray.length; i++){
        sum += newArray[i];
    }
    average = sum / newArray.length;
    return(average)

}

console.log(numAverage(age))
console.log(numAverage(nameLengths))

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverage(firstArray, secondArray){
    sum = 0
    for (i = 0; i < firstArray.length; i++){
        sum += firstArray[i];
    }
    firstAverage = sum / firstArray.length;
    
    sum = 0
    for (i = 0; i < secondArray.length; i++){
        sum += secondArray[i];
    }
    secondAverage = sum / secondArray.length;


    if(firstAverage>secondAverage){
        return(true)
    }else{
        return(false)
    }

}

console.log(compareAverage(age, nameLengths))
console.log(compareAverage(nameLengths, age))

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return(true)
    }else{
        return(false)
    }
}

console.log(willBuyDrink(true, 11.00))
console.log(willBuyDrink(true, 8.00))
console.log(willBuyDrink(false, 11.0))
console.log(willBuyDrink(false, 5.0))

//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.



