import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import TODO_BODY from './components/Todo-BODY.vue'
import moment from 'moment'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    seq: 0,
    list: [] //{seq: 0, 1, 2.. todoName: String, regDate: yyyymmdd}
  },
  mutations: {
    pushToList(state, item){
      state.list.push(item);
    },
    doTodoItem (state, seq) {
      state.list[seq].completed = true;
    }    
  }
})

var pageName = document.getElementsByTagName('title')[0].text;

if(pageName == 'todolist'){
  new Vue({
    el: '#todo',
    store,
    render: h => h(TODO_BODY)
  })
}else{
  new Vue({
    el: '#app',
    render: h => h(App)
  })
}
