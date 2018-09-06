<template>
<div class="container mt-4">
  <div class="row">
    <div class="col-md-3">
      <list title="TO DO LIST" @receiveFromList="changeList"></list>
    </div>

    <div class="col-md-7">
      <items
      v-for="(item, index) in todolist"
      :listIndex="item.index"
      :listName="item.name"
      v-show="showList[index]"></items>
    </div>
    <div class="col-md-2">

    </div>


  </div>
</div>
</template>

<script>
import ListComponent from './ListComponent.vue'
import ITEMS from './TodoComponent.vue'
export default {
  components: {
    'list': ListComponent,
    'items': ITEMS
  },
  data() {
    return {
      todolist: this.$store.getters.getToDoLists,
      showList: []
    }
  },
  computed: {

  },
  methods: {
    changeList:function(index){
      this.showList = this.showList.map(el => el = false);
      this.showList[index] = true;
    }
  },
  mounted(){
    for(var i = 0; i < this.todolist.length; i++)
      this.showList.push(false);
    this.showList[0] = true;
  },


}
</script>
<style scoped>
.container{
  border:1px solid rgba(0, 0, 0, .25);
  border-radius:.5rem;
  padding:20px;
  min-height:600px;
}
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
