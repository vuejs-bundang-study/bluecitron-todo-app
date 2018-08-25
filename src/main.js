import Vue from 'vue'
import App from './App.vue'
import TODO from './components/Todo.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})


let todo = new Vue({
  el: '#todo',
  render: h => h(TODO)
})
