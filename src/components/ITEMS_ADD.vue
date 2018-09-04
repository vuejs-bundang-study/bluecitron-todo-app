<template>
  <div id="todoADD" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">할 일 추가</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="할 일 이름" v-model="todoName">
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="할 일 메모" v-model="todoMemo">
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="btnClose">닫기</button>
          <button type="button" class="btn btn-success" @click="todoADD">추가</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ITEMS_ADD',
  data() {
    return {
      todoName: '',
      todoMemo: ''
    }
  },
  props:{
    listIndex: Number,
    listName: String
  },
  computed: {

  },
  methods: {
    todoADD: function(){
      var todo = {
        name: this.todoName,
        memo: this.todoMemo,
        listIndex: this.listIndex,
        listName: this.listName,
        regDate: moment().format('YYYY-MM-DD HH:mm:ss')
      }
      this.$store.commit('addToDoItem', todo);
      this.todoName = ''; this.Memo = '';
      this.closeModal();
    },
    closeModal: function(){
       var elem = this.$refs.btnClose;
       elem.click();
    }
  }


}
</script>
<style scoped>

</style>
