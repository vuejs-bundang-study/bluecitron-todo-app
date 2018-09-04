import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolists:
    [
      {index: 0, name:'MyTodo', div:'Any', regDate:'2018-09-03 21:43:26'},
      {index: 1, name:'WORK', div:'COMPANY', regDate:'2018-09-04 21:43:26'}
    ],
    todolistIndex: 2,
    todos:[
      {
        index: 0, listIndex:0, listName: 'MyTodo', name:'수입맥주4캔 사다놓기', memo: '메모', forDate:'2018-09-04 21:00:00', regDate:'2018-09-03 21:44:30',
        completed: false
      },
      {
        index: 1, listIndex:0, listName: 'MyTodo', name:'실버1 승급하기', memo: '메모', forDate:'2018-09-04 21:00:00', regDate:'2018-09-03 21:44:30',
        completed: true
      },
      {
        index: 2, listIndex:1, listName: 'WORK', name:'어떻게 농땡이칠지', memo: '메모', forDate:'2018-09-04 21:00:00', regDate:'2018-09-04 21:44:30',
        completed: true
      }
    ], todosIndex: 3,


  },
  getters: {
    getToDoLists: state => state.todolists,
    getToDoItems: state => (listIndex, listName) =>
      state.todos.filter(item => (item.listName == listName) && (item.listIndex == listIndex))
  },
  mutations: {
    addToDoList: (state, item) => {
      item.index = state.todolistIndex++;
      state.todolists.push(item);
    },
    addToDoItem: (state, item) => {
      item.index = state.todosIndex++;
      state.todos.push(item);      
    }
  }
})
