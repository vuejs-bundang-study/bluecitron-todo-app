<template>
<div>
  <div class="card" style="width: 100%">
    <!-- 상단 이미지 -->
    <!-- <img class="card-img-top" :src="getImageOfDay" alt="Card image cap"> -->
    <div :style="topImageStyleObject">
      <div class="content">
        <h1>{{dayString}}</h1>
      </div>
    </div>
    <!-- <hr/> -->
    <div class="card-body">
      <div class="accordion" id="accordionExample">
        <!-- 항목 1 -->
        <div class="card" v-for="(item, index) in items" data-toggle="collapse" :data-target="itemID(index, true)">
          <div class="card-header">
            <h5 class="mb-0 d-flex justify-content-between">
              <button class="btn btn-link" type="button"  aria-expanded="false" >
                {{item.name}}
              </button>
              <div class="d-flex justify-content-between">
                <h6>{{item.regDate}}</h6>
                <font-awesome-icon class="icon" icon="check-circle" />
              </div>
            </h5>
          </div>

          <div :id="itemID(index, false)" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              {{item.memo}}
            </div>
          </div>

        </div>

        <hr/>
        <div class="card" >
          <div class="card-header">
            <h5 class="mb-0 d-flex justify-content-between">
              <button class="btn btn-link btn-add" type="button"
              aria-expanded="false"
              data-toggle="modal" :data-target="modalIDwithShap"
               >
                <font-awesome-icon class="todolist_icon" icon="plus" />
                할 일 추가
              </button>
              <items-add :listIndex="listIndex" :listName="listName" :modalID="modalID"></items-add>
            </h5>
          </div>


        </div>


      </div>

    </div>
  </div>

</div>
</template>

<script>
import ITEMS_ADD from './ITEMS_ADD.vue'
export default {
  name: 'ITEMS',
  data() {
    return {
      
    }
  },
  props:{
    listIndex: Number,
    listName: String
  },
  computed: {
    topImageStyleObject: function(){
      return {
          'background-image': 'url('+ this.imageURL+')',
          'width:':'100%',
          'height':'300px',
          'text-align':'center',

      }
    },
    imageURL: function(){
      return '../src/assets/date/' + new Date().getDay() + '.jpg'
    },
    dayString: function(){
      var day = new Date().getDay(), result = '';
      switch(day){
        case 0: result = 'SUNDAY';     break;
        case 1: result = 'MONDAY';     break;
        case 2: result = 'TUESDAY';    break;
        case 3: result = 'WEDNESSDAY'; break;
        case 4: result = 'THURSDAY';   break;
        case 5: result = 'FRIDAY';     break;
        case 6: result = 'SATURDAY';   break;
      }
      return result;
    },
    modalID: function(){
      return 'todoADD_' + this.listIndex;
    },
    modalIDwithShap: function(){
      return '#' + this.modalID;
    },
    items:function(){
      return this.$store.state.todos.filter(item => (item.listName == this.listName) && (item.listIndex == this.listIndex));
    },

  },
  methods: {
    itemID: function(index, withSharp){
      return (withSharp ? '#' : '') + 'collapse_' + index;
    }
  },
  created() {

  },
  components:{
    'items-add':ITEMS_ADD
  }


}
</script>
<style scoped>
img {
  width: 100%;
  height: 300px;
}
button{
  color:black;
  font-weight:bolder;
}
button:hover{
  color:black;
  text-decoration: none;
}
h6{
  position:relative;
  top:10px;
  margin-right:10px;
}
.card{
  cursor:pointer;
}
.icon{
  position:relative;
  top:7px;
  color:green;
  cursor:pointer;
}
.icon:hover{

}
.content{
  position:relative;
  top:100px;
  color:rgba(255, 255, 255, 0.8);
  z-index:1;
}
.btn-add{
  font-size:18px;
  text-decoration: none;
}
.btn-add:hover{
  color:rgba(16, 128, 8, 1);
}
</style>
