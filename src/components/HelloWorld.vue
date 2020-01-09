<template>
  <div class="hello">
   
    <input
      type="text"
      @keyup.enter='changeVal'
    >
    <div
      v-for="item in list"
      :key='item.id'
    >{{item.name}}{{item.age}}</div>
    <div>水果总数：{{Count}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// 定义接口目的是 相当于定义一个规范
interface filter {
  id: number;
  name: string;
  age?:number
}
interface listing{
  data:filter[]
}
function liAany<T>(num:T):T {
 console.log(num) 
 return num;
}
liAany<number>(3)
// 总结  接口可以进行嵌套使用  比如说最外层是个对象，然后里面是数组 并且可以使用默认值
@Component
export default class HelloWorld extends Vue {
   
  // 这里面的数据相当于data
  private list: filter[] = [{id:1,name:'苹果',age:12},{id:2,name:'香蕉'}];
  private fullname: string = "zhangslisiwangwu";
  private changeVal(e: any) {
    this.list.push(e.target.value);
    e.target.value = "";
  }
  private get Count() {
    return this.list.length;
  }
   reader(data:listing){
     data.data.forEach((item)=>{
       console.log(item.id,item.age)
       if(item.age){
         console.log(item.age)
       }
     })
   }
  
  created() {
    this.reader({data:[
    {id:1,name:'zhangs'},
    {id:2,name:'lis',age:11}
  ]})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
