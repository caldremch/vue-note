//vue 组件树
import Vue from 'vue'
import App from './App'
// Vue.component('my-header', {
//   template:'<p> this is my header {{ msgInner }} haha</p>',
//   data:{
//     msgInner: "this is my header"
//   }
// })

var myHeader2 = {
  template:'<p> this is the second </p>'
}

var myHeader = {
    template:'<p>this is the first <my-header-second>t</my-header-second></p>',
    components:{
      'my-header-second' : myHeader2
    }
}

// 实例1
// var root = new Vue({
//     el:'#app',
//     // template: "<p>{{ msg }}</p>",
//     data:{
//         msg: 'hello caldremch learn vue'
//     }
//     ,components:{
//       'my-header':myHeader
//     }
// })

//实例2
var root = new Vue({
  el:'#app',
  render: h => h(App)
})



