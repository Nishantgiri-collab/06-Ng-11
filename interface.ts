//when ever we know the "declaration", but we dont know "implementation" then we chose interfaces
//we will declare interfaces by using "interface" keyword
//implementation provided by either "classes" or "json".
/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
    let obj1:interface1 = {
        var_one :"Angular",
        var_two :"nodeJs",
        var_three : "MongoDB",
    }
    console.log(obj1.var_one, obj1.var_two, obj1.var_three)

class class_one implements interface1{
    var_one:string = "VueJs";
    var_two:string = "NodeJs";
    var_three:string = "MongoDB";
}
let obj:class_one = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three)
*/

/*
interface interface1{
    fun_one():void;
    fun_two():void;
    fun_three():void;
}

//class or Json
class class_one implements interface1{
    fun_one():void{
        console.log("Hello_1")
    }
    fun_two():void{
        console.log("hello_2")
    }
    fun_three():void{
        console.log("hello_3")
    }
}
let obj1:class_one = new class_one();
obj1.fun_one(), obj1.fun_two(), obj1.fun_three();

let obj2:interface1 = {
    fun_one : ():void=>console.log('hello_1'),
    fun_two : ():void=>console.log("hello_2"),
    fun_three : ():void=>console.log("hello_3")
}
obj2.fun_one();
obj2.fun_two();
obj2.fun_three();
*/

/*
//single level inheritance with interface
interface interface1{
    var_one:string;
};
interface interface2 extends interface1{
    var_two:string;   
};
let obj:interface2 = {
    var_one : "Hello_1",
    var_two : "Hello_2"
};
console.log( obj.var_one, obj.var_two );
*/

/*
interface interface1{
    var_one:string;
};
interface interface2 extends interface1{
    var_two:string;
};
interface interface3 extends interface2{
    var_three:string;
};
let obj:interface3 = {
    var_one: "hello1",
    var_two: "hello2",
    var_three:"hello3"
};
console.log(obj.var_one, obj.var_two, obj.var_three);
*/

interface Parent1{
    var_one:string;
}
interface Parent2{
    var_two:string;
}
interface Child extends Parent1, Parent2{
    var_three:string;
}
let obj:Child = {
    var_one : "Hello 1",
    var_two : "Hello 2",
    var_three  :"Hello 3",
};
console.log(obj.var_one, obj.var_two, obj.var_three);