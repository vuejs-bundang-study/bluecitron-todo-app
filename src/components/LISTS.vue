<template>
<div>
  <!-- 1. 제목 -->
  <h5>{{title}}</h5>

  <hr/>
  <!-- 2. 리스트 -->
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-start todolist" v-for="(item, index) in list">
      <font-awesome-icon class="todolist_icon" icon="align-justify" />
      <p @click="changeList(index)">{{item.name}} [ {{item.div}} ] </p>
    </div>
  </div>

  <hr/>
  <!-- 3. 추가 -->
  <div class="d-flex justify-content-start todolist">
    <font-awesome-icon class="todolist_icon" icon="plus" />
    <p data-toggle="modal" data-target="#exampleModal">리스트 추가</p>
  </div>

  <!-- 4. 모달 -->
  <list-add  @receive="addToDoList"></list-add>

</div>
</template>

<script>
import LISTS_ADD from './LISTS_ADD.vue'
import moment from 'moment'

export default {
  name: 'LISTS',
  data() {
    return {
      list: this.$store.getters.getToDoLists,
    }
  },
  props:{
    title: String
  },
  computed: {

  },
  methods: {
    addToDoList:function(name, div){
      var todolist = {name: name, div: div, regDate: moment().format('YYYY-MM-DD HH:mm:ss')}
      this.$store.commit('addToDoList', todolist);
    },
    changeList: function(index){            
      this.$emit('receiveFromList', index);
    }
  },
  components:{
    'list-add': LISTS_ADD
  }
}
</script>
<style scoped>
.todolist {
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

.todolist_icon {
  position: relative;
  top: 6px;
}

.todolist>p {
  margin-left: 10px;
  font-weight: 600;
}
img{
  width:100%;
  height:300px;
}
</style>
