console.log('你好，ts')
// 字符串类型
let str:string = 'typecript'
// 布尔类型
let flag:boolean = true
// 数字类型
let num:number = 111
// 数组
let arr:number[] = [1,2,3]
let arr1:Array<number> = [1,2,3]
let arr3:any[] = [1,2,'q']
let arr4:Array<any> = [1,2,'sssssssssss']
// 元祖类型
let arr2:[number, string] = [111, '111']
// 枚举类型
enum Flag {
  success = 1,
  error = 0
}
enum Flag1 {
  success,
  error
}
let falg:Flag = Flag.success
let falg1:Flag1 = Flag1.success
// 任意类型
let test:any = 11
test = 'aaa'
// null undefined 是其他类型（never类型）的子类型
let jj:undefined | number
console.log(jj) // undefined
jj = 11
console.log(jj) // 11

let bb:null | undefined | number
bb = null
console.log(bb)

// void 类型 一般用于定义方法时没有返回值 如果函数有返回值那么就指定返回值类型

function run():void{
  console.log('void')
}
run()

function run1():number{
  return 111
}
run1()
// never 类型：表示其他类型（包括undefined null）子类型  代表从来不会出现的值
// 这就意味着声明never的变量只能被never类型所赋值
let b:never
// b = (() => {
//   throw new Error('错误')
// })()



// 函数定义

// 1.函数声明法

function go():string{
  return 'aaaa'
}
// 匿名函数法
let numbb = function():number{
  return 1111
}
// 传递传递参数
function getInfo(name:string, age:number):string{
  return `${name} --- ${age}`
}
let numbbb = function(name:string, age:number):string{
  return `${name} --- ${age}`
}
// 没有返回值函数
function ff():void{
  console.log('void')
}
// es5中实参和形参可以不一样   但是在ts中必须一样，如果不一样必须配置可选参数
// 注意：可选参数 -- 必须配置到后面
function getUser(name:string, age?:number):string{ // 可选参数
  if(age) {
    return `${name} --- ${age}`
  }else{
    return `${name} --- 年龄保密`
  }
}
// 默认参数
function getUser1(name:string, age:number=20):string{ // 可选参数
  return `${name} --- ${age}`
}
// 剩余参数(三点运算符)
function sum(a:number, ...resulte:number[]):number{
  let sum:number = 0
  console.log(resulte)
  for(let i = 0; i < resulte.length; i++) {
    sum += resulte[i]
  }
  return sum + a
}
console.log(sum(1,2,3))

// 函数重载
// ts中通过对同一个函数提供多个函数类型定义来实现多个功能目的

// function getMM(name:string):string
// function getMM(name:number):number
function getMM(name:any):any{
  if(typeof name === 'string'){
    return '我叫' + name
  }else{
    return '我的年龄是' + name
  }
}
console.log(getMM(true))



// typescript中继承

// 1.定义类
class Person {
  public name:string; // 属性，前面省略了public关键词
  constructor(n:string) { // 构造函数，实列化类的时候触发方法
    this.name = n
  }
  getName():string{
    return this.name
  }
  setName(name:string):void {
    this.name = name
  }
}
let p = new Person('张三')
p.setName('李四')
let data = p.getName()
// alert(data)




// 2.ts中实现继承 extends  super
class Person1 {
  public name:string; // 属性，前面省略了public关键词
  constructor(n:string) { // 构造函数，实列化类的时候触发方法
    this.name = n
  }
  run():string{
    return `${this.name}在运动`
  }
}
let p1 = new Person1('张三')
console.log(p1.run())
class Web extends Person1{
  constructor(name:string){
    super(name) // 调用父类构造函数
  }
  work():void {
    alert(this.name + '在运动')
  }
}
let web = new Web('李四111')
console.log(web.run())
// web.work()




// 3.类里面修饰符 ts中提供三种修饰符（public protected private）
// public 在类里面和子类以及类外面都可以访问
// protected 类里面和子类可以访问，类外面不可以访问
// private 只能在类里面可以访问
// 属性默认不加修饰符就是public属性

class Person2 {
  public name:string; // 属性，前面省略了public关键词
  constructor(n:string) { // 构造函数，实列化类的时候触发方法
    this.name = n
  }
  run():string{
    return `${this.name}在运动`
  }
}
let p11 = new Person2('张三')
console.log(p11.name, '共有属性') // 类外面获取共有属性（public）
console.log(p11.run())
class Web1 extends Person1{
  constructor(name:string){
    super(name) // 调用父类构造函数
  }
  work():void {
    alert(this.name + '在运动') // 这里的this.name属性就是父亲的public属性(子类访问父类public属性)
  }
}
let web1 = new Web1('李四221')
console.log(web1.run())



// ts中静态方法 静态属性 抽象类  多态
// 静态方法没办法调用类里面属性
class People {
  static age:number = 12
  static getAge():void {
    alert(this.age)
  }
}
// People.getAge()
console.log(People.age)

// 2. 多态 父类定义一个方法不去实现，让定义他的子类去实现，每个子类
// 都有不同的表现  所以说：多态属于继承

class Animal{
  name:string
  constructor(name:string) {
    this.name = name
  }
  eat():void {
    // 具体吃什么  父类不知道  通过子类实现具体吃什么
    console.log('吃的方法')
  }
}
class Dog extends Animal{
  constructor(name:string) {
    super(name)
  }
  eat():string {
    return this.name + '吃粮食'
  }
}
class Cat extends Animal{
  constructor(name:string) {
    super(name)
  }
  eat():string {
    return this.name + '吃老鼠'
  }
}

// 3.抽象类  他是提供其他类继承的基类， 不能直接实列化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现必须在
// 派生类中实现
abstract class Go {
  public name:string
  constructor(name:string) {
    this.name = name
  }
  abstract eat():any
}
class Gochild extends Go{
  constructor(name:any){
    super(name)
  }
  // 抽象类的子类必须实现父类定义的抽象方法
  eat() {
    console.log(this.name + '吃粮食')
  }
}
let hh = new Gochild('xiaomaoa')
hh.eat()




// 接口以及属性类型接口：接口是一种规范定义  定义行为和动作的规范 批量方法传入参数进行约束
// 接口类别（属性类接口，函数类型接口，可索引接口，类类型接口，接口扩展）

// 1.属性接口  对json约束
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 定义接口
interface FullName{
  firstName:string;
  lastName:string;
}
function frintName(name: FullName){
  console.log(name.firstName + '----' + name.lastName)
}
let obj = {firstName: '11', lastName: '22', age: 20}
frintName(obj)

// 2对批量方法传入参数进行约束
function frintInfo(info: FullName){
  console.log(info.firstName + '----' + info.lastName)
}
frintInfo(obj)
// 2.接口： 可选属性