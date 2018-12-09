var Calculator = require('../Calculator.js');
var add = Calculator.add;
var substract = Calculator.substract;
var multiply = Calculator.multiply;
var division = Calculator.division;

it('should add two numbers', function(){
    var expectedResult = 15;
    var result = add(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('should substract two numbers', function(){
    var expectedResult = 5;
    var result = substract(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('should multiply two numbers', function(){
    var expectedResult = 50;
    var result = multiply(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('should division two numbers', function(){
    var expectedResult = 2;
    var result = division(10, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});