let title:string;
title='奔跑吧！';
let names:string[];
names = ['zhangs','lis'];
let content:any;
content = 2;
content= 'zhangs';
let list:any[];
list=[1,2,'abc',true]
console.log(title,names);
// 函数的类型  参数的类型、返回值的类型
// 形参和实参的个数必须是一样的，如果形参是可选参数，形参后面加？ 
// 还有另外一种默认参数的方式  直接给number =19
// ! 断言 就是告诉ts这个遍历的值我一定会传参，不用它检测了
function getting(num:string,age:number=19):string{
  return 'hello'
}
var sum:string = getting('abc');
function vosid():void{
  // 可以没有返回值
}
function zaoxiaojiej(age:number=18,name?:string):string{
  return '我要找'+age+'岁的小姐姐'
}
var age:number = 18;
var result:string= zaoxiaojiej();
console.log(result)
// 联合类型，就是可以有两个以上的类型，中间用|分割
let num:string|number
num = 9
num = '9'
console.log(num)
// 联合类型使用在函数或者对象中的时候，当要使用属性或者方法的时候要使用这两个类型共同的属性，不如一下案例，不能使用(length)属性，因为number 没有length属性，会报错，其实联合属性可以理解成推断属性
function getNum (num:string|number):string{
   return num.toString()
}
getNum(9)

// 对象类型 ---接口
// 个人对于接口的理解是：当定义对象的时候，先给对象的属性的类型定义成一个对象，然后在定义对象的时候调用这个规则(仅限于个人理解)
// interface 定义接口的关键字 Item 接口名字
// interface Item{
//     age:number
//     name:string
//     isok:boolean
// }
// let youLi:Item={
//   name:'zhangs',
//   age:20,
//   isok:true
// }
// 定义一个接口在使用这个接口的时候严格按照接口的形式去定义，不能多一个、少一个属性，变量的形状必须和接口一致
// interface Item {
//   age?:number;
//   name:string;
//   isok:boolean
// }
// let youLi:Item ={
//   name:'zhangs',
//   isok:false
// }
// 当存在有可选属性的时候，说明这个属性是可有可无的，这种情况下接口和变量的结构可以不一致，这种情况下是可少不可多
// interface Item{
//   name:string
//   age?:number
//   [propName:string]:any
// }
//  let youLi:Item={
//    name:'zhangs',
//    age:12,

//    sex:'女',
//    isok:2
//  }
// interface Item{
//   readonly id:number
//   age?:number
//   [propName:string]:any
// }
// // 定义接口完成，下一步要使用
// let youli:Item={
//   id:123,
//   age:12,
//   sex:'女',
//   isok: true

// }
// // youli.id = 234  //只读属性不能重复定义

