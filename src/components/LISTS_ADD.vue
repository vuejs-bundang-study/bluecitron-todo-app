<template>
<div id="exampleModal" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">리스트 추가</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="리스트 이름" v-model="listName">

        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="리스트 구분" v-model="listDiv">

        </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="btnClose">닫기</button>
        <button type="button" class="btn btn-success" @click="addList">추가</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LIST_ADD',
  data() {
    return {
      listName: '',
      listDiv: ''
    }
  },
  props: {

  },
  computed: {

  },
  methods: {
    addList: function(){
      if(this.isValidInput()){
        this.$emit('receive', this.listName, this.listDiv);
        this.listName = ''; this.listDiv = '';
        this.closeModal();
      }else
        alert('리스트 이름을 입력해주세요')
    },
    closeModal: function(){
       var elem = this.$refs.btnClose;
       elem.click();
    },
    isValidInput: function(){
      if(this.listName == '')
        return false;
      return true;
    }
  },
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

img {
  width: 100%;
  height: 300px;
}
</style>
