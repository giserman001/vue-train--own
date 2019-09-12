"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('你好，ts');
// 字符串类型
var str = 'typecript';
// 布尔类型
var flag = true;
// 数字类型
var num = 111;
// 数组
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr3 = [1, 2, 'q'];
var arr4 = [1, 2, 'sssssssssss'];
// 元祖类型
var arr2 = [111, '111'];
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var Flag1;
(function (Flag1) {
    Flag1[Flag1["success"] = 0] = "success";
    Flag1[Flag1["error"] = 1] = "error";
})(Flag1 || (Flag1 = {}));
var falg = Flag.success;
var falg1 = Flag1.success;
// 任意类型
var test = 11;
test = 'aaa';
// null undefined 是其他类型（never类型）的子类型
var jj;
console.log(jj); // undefined
jj = 11;
console.log(jj); // 11
var bb;
bb = null;
console.log(bb);
// void 类型 一般用于定义方法时没有返回值 如果函数有返回值那么就指定返回值类型
function run() {
    console.log('void');
}
run();
function run1() {
    return 111;
}
run1();
// never 类型：表示其他类型（包括undefined null）子类型  代表从来不会出现的值
// 这就意味着声明never的变量只能被never类型所赋值
var b;
// b = (() => {
//   throw new Error('错误')
// })()
// 函数定义
// 1.函数声明法
function go() {
    return 'aaaa';
}
// 匿名函数法
var numbb = function () {
    return 1111;
};
// 传递传递参数
function getInfo(name, age) {
    return name + " --- " + age;
}
var numbbb = function (name, age) {
    return name + " --- " + age;
};
// 没有返回值函数
function ff() {
    console.log('void');
}
// es5中实参和形参可以不一样   但是在ts中必须一样，如果不一样必须配置可选参数
// 注意：可选参数 -- 必须配置到后面
function getUser(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 默认参数
function getUser1(name, age) {
    if (age === void 0) { age = 20; }
    return name + " --- " + age;
}
// 剩余参数(三点运算符)
function sum(a) {
    var resulte = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resulte[_i - 1] = arguments[_i];
    }
    var sum = 0;
    console.log(resulte);
    for (var i = 0; i < resulte.length; i++) {
        sum += resulte[i];
    }
    return sum + a;
}
console.log(sum(1, 2, 3));
// 函数重载
// ts中通过对同一个函数提供多个函数类型定义来实现多个功能目的
// function getMM(name:string):string
// function getMM(name:number):number
function getMM(name) {
    if (typeof name === 'string') {
        return '我叫' + name;
    }
    else {
        return '我的年龄是' + name;
    }
}
console.log(getMM(true));
// typescript中继承
// 1.定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
p.setName('李四');
var data = p.getName();
// alert(data)
// 2.ts中实现继承 extends  super
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person1;
}());
var p1 = new Person1('张三');
console.log(p1.run());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this; // 调用父类构造函数
    }
    Web.prototype.work = function () {
        alert(this.name + '在运动');
    };
    return Web;
}(Person1));
var web = new Web('李四111');
console.log(web.run());
// web.work()
// 3.类里面修饰符 ts中提供三种修饰符（public protected private）
// public 在类里面和子类以及类外面都可以访问
// protected 类里面和子类可以访问，类外面不可以访问
// private 只能在类里面可以访问
// 属性默认不加修饰符就是public属性
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    Person2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
var p11 = new Person2('张三');
console.log(p11.name, '共有属性'); // 类外面获取共有属性（public）
console.log(p11.run());
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this; // 调用父类构造函数
    }
    Web1.prototype.work = function () {
        alert(this.name + '在运动'); // 这里的this.name属性就是父亲的public属性(子类访问父类public属性)
    };
    return Web1;
}(Person1));
var web1 = new Web1('李四221');
console.log(web1.run());
// ts中静态方法 静态属性 抽象类  多态
// 静态方法没办法调用类里面属性
var People = /** @class */ (function () {
    function People() {
    }
    People.getAge = function () {
        alert(this.age);
    };
    People.age = 12;
    return People;
}());
// People.getAge()
console.log(People.age);
// 2. 多态 父类定义一个方法不去实现，让定义他的子类去实现，每个子类
// 都有不同的表现  所以说：多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        // 具体吃什么  父类不知道  通过子类实现具体吃什么
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃粮食';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return Cat;
}(Animal));
// 3.抽象类  他是提供其他类继承的基类， 不能直接实列化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现必须在
// 派生类中实现
var Go = /** @class */ (function () {
    function Go(name) {
        this.name = name;
    }
    return Go;
}());
var Gochild = /** @class */ (function (_super) {
    __extends(Gochild, _super);
    function Gochild(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现父类定义的抽象方法
    Gochild.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Gochild;
}(Go));
var hh = new Gochild('xiaomaoa');
hh.eat();
// 接口以及属性类型接口：接口是一种规范定义  定义行为和动作的规范 批量方法传入参数进行约束
// 接口类别（属性类接口，函数类型接口，可索引接口，类类型接口，接口扩展）
// 1.属性接口  对json约束
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function frintName(name) {
    console.log(name.firstName + '----' + name.lastName);
}
var obj = { firstName: '11', lastName: '22', age: 20 };
frintName(obj);
// 2对批量方法传入参数进行约束
function frintInfo(info) {
    console.log(info.firstName + '----' + info.lastName);
}
frintInfo(obj);
// 2.接口： 可选属性
