//Function
//particular business logic is called as "functions"
//function are used to reuse the "business logic"
//the function without name called as "anonymous function"
//anonymous function also called as "arrow" functions
//arrows functions we will represent with "=>"
//arrow functions introduced in "ES6"
/*
Function define two ways
1) function defination
2) function calling
*/
// 1) function defination
/*
    var/let/cont variablename:any = {arg1:datatype, arg2:datatype}:
    returntype=>{
        business logic
    }

    // 2) function calling
    variablename(param1, param2)
*/
// For example
var fun_one = function () {
    return "Welcome to angular program";
};
console.log(fun_one()); //Welcome to angular program
//2) Example by use void
//void cannot contain anything
var fun_two = function () {
    return console.log("Hello");
};
fun_two(); //Hello
// 3) exaple
var fun_three = function (arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
};
//fun_three()           //Expected 3 arguments, but got 0.
//fun_three("hello_1", "Hello_2","Hello_3")   //hello_1 Hello_2 Hello_3
fun_three("hello", "google", "s");
// 4) Exaple
var networkCall = function (arg1, arg2) {
    console.log(arg1(), arg2());
};
networkCall(function () { return "hello_1"; }, function () { return "hello_2"; });
