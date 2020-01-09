## 数据类型篇
+ 联合类型

```typescript
let num:nunber|'string'
num = 9;
num = '9'
```
+ 理解：联合类型，就是可以有两个以上的类型，中间用|分割
+ 联合类型使用在函数或者对象中的时候，当要使用属性或者方法的时候要使用这两个类型共同的属性，不如一下案例，不能使用(length)属性，因为number 没有length属性，会报错，其实联合属性可以理解成推断属性
```typescript
function getNum (num:string|number):string{
   return num.toString()
}
getNum(9)
```
## 对象类型 ---接口
+ 个人对于接口的理解是：当定义对象的时候，先给对象的属性的类型定义成一个对象，然后在定义对象的时候调用这个规则(仅限于个人理解)
+ interface 定义接口的关键字 Item 接口名字
```typescript
interface Item{
    age:number
    name:string
    isok:boolean
}
let youLi:Item={
  name:'zhangs',
  age:20,
  isok:true
}
```
+ 这是第一种情况：定义一个接口在使用这个接口的时候严格按照接口的形式去定义，不能多一个、少一个属性，变量的形状必须和接口一致
```typescript
interface Item {
  age?:number;
  name:string;
  isok:boolean
}
let youLi:Item ={
  name:'zhangs',
  isok:false
}
```
+ 这是第二种情况：当存在有**可选属性**的时候，说明这个属性是可有可无的，这种情况下接口和变量的结构可以不一致，这种情况下是可少不可多
```typescript
interface Item{
  name:string
  age?:number
  [propName:string]:any
}
 let youLi:Item={
   name:'zhangs',
   age:12,

   sex:'女',
   isok:2
 }

```

+ 第三种情况,任意属性 已经标出的属性要按照对应的方式来，任意属性是可以有任意多个，值的类型也可以是任意的类型

``` typescript
interface Item{
  readonly id:number
  age?:number
  [propName:string]:any
}
// 定义接口完成，下一步要使用
let youli:Item={
  id:123,
  age:12,
  sex:'女',
  isok: true

}
youli.id = 234  //只读属性不能重复定义
```
+ 第四种情况：只读属性也需要符合接口的结构，只是不能重复赋值。