/* 
    class
    -collection of variable and function called as class
    -we will define the classes by using "class" keyword.
    -we will create object to the class by using "new" keyword.
    -we have following modifiers
        1) public
        2) private
        3) protected
    -recomended modifier for variable is "private".
    -recomended modifier for function is "piblic".

    We will define constructor by using "constructor" keyword
*/
/*
class class_one{
    var_one:string = "hello_1";
    var_two:string = "hello_2";
    var_three:string = "hello_3";
};
let obj:class_one = new class_one();
console.log( obj.var_one, obj.var_two, obj.var_three );
*/
/*
class class_one{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor(){
        this.sub_one = "Angular13";
        this.sub_two = "NodeJs";
        this.sub_three = "MongoDb";
    }
    public getSubOne():string{
        return this.sub_one;
    }
    public getSubTwo():string{
        return this.sub_one;
    }
    public getSubThree():string{
        return this.sub_one;
    }
}
let obj:class_one=new class_one();
console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );
*/

/*
class class_one{
    constructor(public arg1:any, public arg2:any, public arg3:any){}
};
let obj1:class_one = new class_one("hello", "hello2","hello3");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);

let obj2:class_one = new class_one("google","chrome","opera")
console.log(obj2.arg1, obj2.arg2, obj2.arg3)
*/

/*
class class_one{
    constructor(public arg1:any){}
};
class class_two{
    var_one:string = "hello";
};
let obj:class_one = new class_one( new class_two() );
console.log(obj.arg1.var_one );
*/

class class_one{
    constructor(public obj1:any,public obj2:any,public obj3:any){}
};

class class_two{
    var_one:string = "where are from ";
};

class class_three{
    var_one:string = "I am from pune";
};

class class_four{
    var_one:string = "softwere developer";
};

let obj:class_one = new class_one(new class_two(), new class_three(), new class_four());

console.log(
    obj.obj1.var_one
);

console.log(
    obj.obj2.var_one
);

console.log(
    obj.obj3.var_one
);