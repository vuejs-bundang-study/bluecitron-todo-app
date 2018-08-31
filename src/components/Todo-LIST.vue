<template>
  <div class="col-md-6">
    <h4 class="listTitle">{{title}}</h4>
    <div class="list">
      <div class="item d-flex justify-content-between" v-for="item in list" v-if="item.completed == flag" @click="complete(item.seq)">
        <h6 class="item-title" >{{ item.title }}</h6>
        <span class="item-regdate">{{ item.regdate }}</span>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name: 'LIST',
  data() {
    return {
      list: this.$store.state.list,
      flag: this.mode
    }
  },
  props:{
    title: String,
    mode: Boolean
  },
  methods: {
    complete: function(seq){
      this.$store.commit('doTodoItem', seq);
    }
  }

}

</script>
<style>
.listTitle{
  font-weight: bold;
  letter-spacing: 2.5px;
  padding-left:10px;
}
.list{
  width: 100%;
  height: 500px;
  border:1px solid black;
  padding:10px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  overflow: scroll;
}
.item{
  border:1px solid green;
  margin:10px 0px;
  padding:5px;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}
.item:hover{
  border: 1.5px solid rgba(0,0,255,.25);
}
.item-title{
  font-weight:bold;
  margin:0px 20px 10px 0px;
}
.item-regdate{
  color: gray;
}
</style>
