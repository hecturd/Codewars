// This code does not execute properly. Try to figure out why. function multiply(a, b){
//  a * b
//}
//2/16/23
// my solution
function multiply(a,b){
    return a * b
};
multiply(1 , 2);

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//2/17/23
// my solution
function evenOrOdd(i){
 if (i % 2 == 0) {
    return('Even')
 } else {
   return('Odd')
 }
}
evenOrOdd(5);
// Very simple, given an integer or a floating-point number, find its opposite. 2/18/23
//Examples:
//1: -1
//14: -14
//-34: 34
// my solution
function opposite(number) {
  return (number * -1)
}
opposite(5);
//Complete the solution so that it reverses the string passed into it.2/19/23
//'world'  =>  'dlrow'
//'word'   =>  'drow'
//my solution
function solution(str){
  return str.split("").reverse().join("");
}
solution('world','word')