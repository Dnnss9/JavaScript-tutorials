/* Ex1 : 
    Write a JS program to create a new string from a given 
    string taking the first 3 characters and the last 3 
    characters of a string and adding them together.
    The string length must be 3 or more, if not, 
    the original string is returned.
*/

function newString1(str) {
    let newStr = '';
    if(str.length >= 3){
        let characters = str.split('');
        let first = characters[0] + characters[1] + characters[2];
        let last = characters[str.length - 3] + characters[str.length - 2] + characters[str.length - 1];
        newStr = first+last;
    }
    else
        newStr = str;
    return newStr;
}

const newString = (str) =>
    str.length < 3 ? str : str.slice(0, 3)+ str.slice(-3);

/* Ex2 : 
    Write a JS program to extract the first half of 
    a string of even length.
*/

function firstHalf1(str){
    let newStr = str.slice(0, str.length/2);
    return newStr;
}

const firstHalf = (str) =>
    str.slice(0, str.length/2);

/* Ex3 : 
    Write a JS program to concatenate two strings except
    their first character.
*/

function concatenate1(str1, str2) {
    return str1.slice(1, str1.length)+str2.slice(1, str2.length);
}

const concatenate = (str1, str2) =>
    str1.slice(1, str1.length)+str2.slice(1, str2.length);

/* Ex4 : 
    Given two values, write a JS program to find out wich 
    one is nearest 100.
*/

function nearest1001(nb1, nb2) {
    let nb;
    if (Math.abs(nb1-100) < Math.abs(nb2-100))
        nb = nb1;
    else 
        nb = nb2;
    return nb;
}

const nearest100 = (nb1, nb2) =>
    (Math.abs(nb1-100) < Math.abs(nb2-100)) ? nb1 : nb2;

/* Ex 5: 
    Write a JS program to check a given string contains 2
    to 4 occurrences of a specified character.
*/


function occurrence1(str, char) {
    let nb = str.split(char).length-1; 
    let res = false;
    if (nb >=2 && nb<=4)
            res = true;
    return res;
}
