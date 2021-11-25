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
let fun_one = ():string=>{
    return "Welcome to angular program";

}
console.log( fun_one() );           //Welcome to angular program


//2) Example by use void
//void cannot contain anything
let fun_two =():void =>
console.log("Hello");
fun_two();              //Hello

// 3) exaple
let fun_three = (arg1:string, arg2:string, arg3:string):void=>{
    console.log(arg1, arg2, arg3)
}
//fun_three()           //Expected 3 arguments, but got 0.
//fun_three("hello_1", "Hello_2","Hello_3")   //hello_1 Hello_2 Hello_3
fun_three("hello", "google","s")
 
// 4) Exaple function  inside function
let networkCall = (arg1:any, arg2:any): void=>{
    console.log( arg1(), arg2() )
}
networkCall( ():string=>{return "hello_1"}, ():string=>{ return "hello_2"} );
            // hello_1 hello_2

/*
//typeof
console.log( typeof "Angular13" );                      //string
console.log( toString.call("Angular13") );              //[object String]

console.log( typeof 100 );                              //number
console.log( toString.call(100) );                      //[object Number]

console.log( typeof true );                             //boolean
console.log( toString.call(false) );                    //[object Boolean]

console.log( typeof undefined );                        //undefined
console.log( toString.call(undefined) );                //[object Undefined]

console.log( typeof null );                             //object
console.log( toString.call(null) );                     //[object Null]

console.log( typeof [] );                               //object
console.log( toString.call([]) );                       //[object Array]


console.log( typeof {} );                               //object
console.log( toString.call({}) );                       //[object Object]

console.log( typeof function fun_one(){} );             //function
console.log( toString.call(function fun_one(){}) );     //[object Function]
*/