
<template>
    <div>
<h1>我的自定义控件</h1>
<MyComponent></MyComponent>
        {{ hello }}
         <p v-text="hello"> </p>
         <p v-html="hello"> </p>
        
         {{
             status? 'success' : 'failed'
         }}
<h1>集合遍历</h1>
<ul>
<li v-for="(item, index) in list" v-bind:key="index"> {{item.name}} - {{item.age}}- {{index}} </li>
</ul>
<h1>对象遍历</h1>
<ul>
<li v-for="(item, index) in clzList" v-bind:key="index"> {{item}} - {{index}} </li>
</ul>
    </div>
</template>

<script>

//导入自定义控件
import MyComponent from './components/MyCompoent'
export default {
    //在使用自定义组件的时候, 需要注册到当前组件, 否则无法使用
    components: {
        MyComponent
    },
    data() {
        return{
            hello:'<span><img>workd</span>',
            num:1,
            status:false,
            list:[
                {name:'caldremch', age:'1970'},
                {name:'caldremch2', age:'1972'},
            ],
            clzList:{
                name:'caldremch', age:'1970'
            }
        }
    }
}
</script>

<style>
html{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: bisque;
  margin-top: 60px;
}
</style>