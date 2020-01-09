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