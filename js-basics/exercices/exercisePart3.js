/* Ex1 : 
    Write a JS program to find the number of
    even digits in a an array of integers
*/

function evenDig(array){
    let nb = 0;
    for(var i = 0; i<array.length; i++){
        if(array[i]%2 === 0){
            nb += 1;
        }
    }
    return nb;
}

const countEvenNumbers = (array) => 
    array.filter(num => num % 2 === 0).length;

/* Ex2: 
    Write a JS program to find the number of
    even values up to a given number
*/

function evenNumbers(num) {
    let nb = 0;
    for(let i = 0 ; i<=num; i+=2)
        nb +=1;
    return nb-1;
}

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for(let i = 1; i<= num; i++)
        returnArray.push(i);
    return returnArray;
}

/* Ex3: 
    Write a JS program to check wether a given
    array of integers is sorted in ascending order
*/

function isSortedAsc(array){
    let res = true;
    for(let i = 0; i<array.length-1 && res; i++){
        if(array[i]>array[i+1])
            res = false;
    }
    return res;
}

const isAscending = (array) => {
    for (let i = 0 ; i<array.length ; i++){
        if(array[i+1]>array[i])
            return false;
    }
    return true;
}

/* Ex4: 
    Write a JS program to get the largest 
    even number from an array of integers
*/

function largestEvenNum1(array) {
    let max = 0 ;
    for (let i = 0; i<array.length; i++){
        if(max<array[i]&& array[i]%2 ===0)
            max = array[i];
    }
    return max;
}

const largestEvenNum = (array) =>
    Math.max(...array.filter(num => num%2 === 0));

/* Ex5: 
    Write a JS program to remplace the first digit in a string
    (should contains at least digit) with $ characters.
*/

function firstDigit1(str){
    return str.replace(/[0-9]/,'$');
}

const firstDigit = (str) =>
    str.replace(/[0-9]/,'$');

