/* Ex 1 :
    Write a JS program to check two 
    numbers and return true if one of the number 
    is 100 or if the sum of the two is 100
*/

const isEqualTo100 = (num1, num2) => 
    num1 === 100 || num2 === 100 || (num1 + num2) === 100;

// function equal00(num1, num2) {
//     let sum = false;
//     if(num1 === 100 || num2 === 100)
//         sum = true;
//     else if (num1 + num2 === 100) {
//         sum = true; 
//     }
//     return sum;
// }

/* Ex 2 :
    Write a JS program to get the extension of a filename.
*/

const getFileExtension = (str) => 
    str.slice(str.lastIndexOf('.'));

/* Ex3 :
    Write a JS program to replace every 
character in a given string with the character
following it in the alphabet
*/

const replace = (str) => 
    str.split('').map(char =>
        String.fromCharCode(char.charCodeAt(0)+1)).join('');

/* Ex4 :
    Write a JS program to get the current date.
    Expeced Output : 
    mm-dd-yyyy, mm/dd/yyy or dd-mm-yyyy, dd/mm/yy
*/

function currentDate(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    return day + '-'+month+'-'+year;
}

// #

const formatDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

/* Ex5 : 
    Write a JS program to create a new string adding 
    "New!" in front of a given string. If the given string 
    begins with "New!" then return the original string.
*/

function addNew(str){
    if(str.indexOf('New!')==-1){
        str = `New! ${str}`;
    }
    return str;
}
    
// const addNew = (str) => 
//     str.indexOf('New!') === 0 ? str : `New! ${str}`;

    
