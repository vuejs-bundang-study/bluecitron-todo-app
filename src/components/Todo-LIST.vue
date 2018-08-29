<template>
  <div class="col-md-6">
    <h4 class="listTitle">{{listTitle}}</h4>
    <div id="beforeList" class="list">
      <div class="item d-flex justify-content-between" v-for="item in list" v-if="item.completed == false"@click="complete(item.seq)">
        <h6 class="item-title" >{{ item.title }}</h6>
        <span class="item-regdate">{{ item.regdate }}</span>
      </div>

    </div>
  </div>
</template>
<script>

/*******************************************************************************/
export default {
  name: 'app',
  data() {
    return {
      list: []
    }
  },
  props:{
    'listTitle': {
      type: String,
      required: true,
      validator: val=> ['BEFORE', 'COMPLETE'].indexOf(val) != -1
    },
    'newItem': String
  },
  created(){
    // ADD 이벤트 등록
    this.$EventBus.$on('add', (newItem)=>{
      if(this.listTitle == 'BEFORE')
        this.list.push(newItem);
    });

  },
  methods: {
    complete: function(seq){
      this.list[seq].completed = true;
    }
  }

}
/*******************************************************************************/
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
}


#addBtn{
  cursor: pointer;
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
