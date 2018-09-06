<template>
    <b-modal :ref="modalID" hide-footer title="할 일 추가">
      <div class="d-block text-center">
        <b-input-group>
          <b-form-input type="text" class="mb-3" placeholder="할 일 이름" v-model="todoName"/>
        </b-input-group>
        <b-input-group>
          <b-form-input type="text" class="mb-3" placeholder="할 일 메모" v-model="todoMemo"/>
        </b-input-group>
      </div>
      <div class="d-flex justify-content-end">
        <b-btn class="w-25 mt-3 mr-3" variant="outline-secondary" block @click="hideModal">닫기</b-btn>
        <b-btn class="w-25 mt-3" variant="outline-success" block @click="todoADD">추가</b-btn>
      </div>
    </b-modal>
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
    listName: String,
    modalID: String
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
      this.todoName = ''; this.todoMemo = '';
      this.hideModal();
    },
    hideModal: function(){
       var elem = this.$refs[this.modalID].hide();
    }
  }


}
</script>
<style scoped>

</style>
