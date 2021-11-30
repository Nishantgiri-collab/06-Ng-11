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
var obj = {
    var_one: "Hello 1",
    var_two: "Hello 2",
    var_three: "Hello 3"
};
console.log(obj.var_one, obj.var_two, obj.var_three);
