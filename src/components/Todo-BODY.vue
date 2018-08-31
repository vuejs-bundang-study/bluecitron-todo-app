<template>
  <div id="todo" class="container">
    <div class="row mt-5 justify-content-between">
      <h2></h2>
      <h2>TO DO LIST</h2>
      <h5>BlueCitron</h5>
    </div>

    <hr/>

    <div class="row">
      <LIST title="BEFORE" :mode="!flag"></LIST>
      <LIST title="COMPLETE" :mode="flag"></LIST>
    </div>

    <hr/>

    <div class="row mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addBtn" @click="add">ADD</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="30글자미만으로입력" v-model="itemTitle">
      </div>

    </div>

  </div>
</template>
<script>
import moment from 'moment'
import LIST from './Todo-LIST.vue'

export default {
  name: 'app',
  data() {
    return {
      itemTitle: '',
      flag: true
    }
  },
  methods: {
    add: function(){
      var seq = this.$store.state.seq++;
      var item = {
        seq: seq,
        title: this.itemTitle,
        regdate: moment().format('YYYY-MM-DD HH:mm:SS'),
        completed: false
      };
      this.$store.commit('pushToList', item);
      this.itemTitle = '';
    }
  }, //end of methods
  components: {
    'LIST': LIST
  }
}

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
<<<<<<< HEAD
#addBtn{
  cursor: pointer;
}
=======
>>>>>>> 49504f1c26bbac162234898e03385475e7734c1d

</style>
