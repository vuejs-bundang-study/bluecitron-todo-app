import Vue from 'vue'
import App from './App.vue'
import TODO from './components/Todo-BODY.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.prototype.$EventBus = new Vue();
let todo = new Vue({
  el: '#todo',
  render: h => h(TODO)
})
