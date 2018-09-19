<template>
  <b-card class="w-100">
    <div :style="topImageStyleObject">
      <div class="content">
        <h1>{{dayString}}</h1>
      </div>
    </div>

    <b-card no-body class="mb-1" v-for="(item, index) in items">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn
          block
          variant="link"
          @click="expanded[index] = !expanded[index]"
          :aria-controls="itemID(index)"
          :aria-expanded="expanded[index]">
          <div class="d-flex justify-content-between">
            <span>{{item.name}}</span>
            <span>
              {{item.regDate}}
              <font-awesome-icon class="icon checked" icon="check-circle" v-show="item.completed"/>
              <font-awesome-icon class="icon" icon="circle" v-show="!item.completed"/>
            </span>
          </div>
        </b-btn>
      </b-card-header>
      <b-collapse :id="itemID(index)" v-model="expanded[index]">
        <b-card-body>
          <p class="card-text"> {{ item.memo }} </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn variant="link" @click="showModal">
          <font-awesome-icon class="todolist_icon" icon="plus"/> 할 일 추가
        </b-btn>
      </b-card-header>
    </b-card>
    <!-- 추가 모달-->
    <todo-add
    title="할 일 추가"
    :modalID="modalID"
    :listIndex="listIndex"
    :listName="listName"></todo-add>
  </b-card>
</template>

<script>
import TodoAddComponent from './TodoAddComponent.vue'
import moment from 'moment'
export default {
  components: {
    'todo-add': TodoAddComponent
  },
  data() {
    return {
      expanded: {}
    }
  },
  props: {
    listIndex: Number,
    listName: String
  },
  computed: {
    topImageStyleObject: function() {
      return {
        'background-image': 'url(' + this.imageURL + ')',
        'width:': '100%',
        'height': '300px',
        'text-align': 'center',
      }
    },
    imageURL: function() {
      return '../src/assets/date/' + new Date().getDay() + '.jpg'
    },
    dayString: function() {
      return moment().format('dddd').toUpperCase();
    },
    modalID: function() {
      return 'todoADD_' + this.listIndex;
    },
    items: function() {
      return this.$store.state.todos.filter(item => (item.listName == this.listName) && (item.listIndex == this.listIndex));
    },

  },
  methods: {
    itemID: function(index, withSharp) {
      return (withSharp ? '#' : '') + 'collapse_' + index;
    },
    showModal: function(){
      this.$children[this.$children.length - 1].$refs[this.modalID].show()
    }
  },
}
</script>
<style scoped>
img {
  width: 100%;
  height: 300px;
}
button{
  color:black;
  font-weight:bold;
}
.icon {
  position: relative;
  color: gray;
  cursor: pointer;
}
.icon.checked{
  color:green;
}

.icon:hover {}

.content {
  position: relative;
  top: 100px;
  color: rgba(225, 225, 225, 0.8);
  z-index: 1;
}

</style>
