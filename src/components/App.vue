<template>
<div class="container mt-4">
  <div class="row">
    <div class="col-md-3">
      <lists title="TO DO LIST" @receiveFromList="changeList"></lists>
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
import LISTS from './LISTS.vue'
import ITEMS from './ITEMS.vue'
export default {
  name: 'app',
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
  components: {
    'lists': LISTS,
    'items': ITEMS
  }

}
</script>
<style scoped>
.container{
  border:1px solid rgba(0, 0, 0, .25);
  border-radius:2rem;
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
