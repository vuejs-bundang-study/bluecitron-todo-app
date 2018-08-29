<template>
  <div id="todo" class="container">
    <div class="row mt-5 justify-content-between">
      <h2></h2>
      <h2>TO DO LIST</h2>
      <h5>BlueCitron</h5>
    </div>

    <hr/>

    <div class="row">
      <todo-list listTitle="BEFORE"></todo-list>
      <todo-list listTitle="COMPLETE"></todo-list>
    </div>

    <hr/>

    <div class="row mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addBtn" v-on:click="add" v-model="newItem">ADD</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="30글자미만으로입력" v-model="newItem">
      </div>
    </div>

  </div>
</template>
<script>
import LIST from './Todo-LIST.vue'

export default {
  name: 'app',
  data() {
    return {
      seq: 0,
      newItem: ''
    }
  },
  methods: {
    add: function(){
      var item = {
        seq: this.seq++,
        title: this.newItem ,
         regdate: this.getDate(),
         completed: false
       };
      this.$EventBus.$emit('add', item);
      this.newItem = '';
    },
    getDate: function(){
      var now = new Date();
      var year = now.getFullYear();
      var month = this.under10( (now.getMonth() + 1) );
      var date = this.under10(now.getDate());
      var hours = this.under10(now.getHours());
      var minutes = this.under10(now.getMinutes());
      var seconds = this.under10(now.getSeconds());
      var regdate = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
      return regdate;

    },
    under10: function(someValue){
      return someValue < 10 ? '0' + someValue : someValue;
    }
  },
  components: {
    'todo-list': LIST
  }
}
/*******************************************************************************/
</script>
<style>
h2{
  font-weight:bold;
  letter-spacing: 7px;
}
h5{
  color:gray;
  padding-top:20px;
}
.container{
  margin-top:30px;
  padding:0px 30px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

</style>
