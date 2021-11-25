//string
//"" , '' , ``(backtick operator)
//`` backtick operator introduced in ES6
//`` backtick operator used to define the multiline strings
//`` backtick operator also called as template literal

let one:string = "Angular";
let two:string = "mogodb";
let three :string = "nodeJs";
let mean:string = `mean stack dev=> ${one},${two}, ${three}`
console.log(mean);

//Number
let decimalNum:number = 100;
let doubleNum:number = 100.12345;
let hexadecimal:number = 0x123ABC;
let octalNum:number = 0o123;
let binaryNum :number = 0b1010;
console.log(decimalNum,doubleNum,hexadecimal,octalNum,binaryNum)

//Boolean
let flag:Boolean = true;
let flag2:Boolean = false;
console.log(flag, flag2)

//Any
let data:any = "we can store any type of data"


//Arrays
//String arrays 2 ways
let arr1:String[] = ["Angular", "NodeJs","MongoDB"]
let arr2:Array<string> = ["Angular","nodeJs","mongodb"]

//number arrays 2 ways
let num1:number[] = [10,20,30,40,50];
let num2:Array<number> = [10,20,30,40,500];

//boolean array
let b_arr1:boolean[]=[true,false,false,true]
let b_arr2:Array<boolean>=[true,false,false,true]

//json
//any
let obj:any ={
    'one':"anugular",
    "two":"nodejs0",
    "three":"mongoDB"
};

let obj1:any[]=[
    {"msg":"hello1"},{"msg":"hello2"},{"msg":"hello3"},{"msg":"hello3"}
]

//undefined
let u1 :undefined=undefined;
let u2 : null = null;

//Union
let arg1:string|number = "hello";
arg1 = 100     // 100 overriding with hello
let arg2 : string|number|boolean = true
arg2 = "google"  // true override to google