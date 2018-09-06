<template>
  <b-modal ref="ListAddModal" hide-footer title="리스트 추가">
      <div class="d-block text-center">
        <b-input-group>
          <b-form-input type="text" class="mb-3" placeholder="리스트 이름" v-model="listName"/>
        </b-input-group>
        <b-input-group>
          <b-form-input type="text" class="mb-3" placeholder="리스트 구분" v-model="listDiv"/>
        </b-input-group>
      </div>
      <div class="d-flex justify-content-end">
        <b-btn class="w-25 mt-3 mr-3" variant="outline-secondary" block @click="hideModal">닫기</b-btn>
        <b-btn class="w-25 mt-3" variant="outline-success" block @click="addList">추가</b-btn>
      </div>
    </b-modal>
</template>

<script>
export default {
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
        this.hideModal();
      }else
        alert('리스트 이름을 입력해주세요')
    },
    hideModal: function(){
       this.$refs.ListAddModal.hide();
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
