<template>
  <div id="todo" class="container">
    <div class="row mt-5 justify-content-between">
      <h2></h2>
      <h2>TO DO LIST</h2>
      <h5>BlueCitron</h5>
    </div>

    <hr/>

    <div class="row">
      <div class="col-md-6">
        <h4 class="listTitle">BEFORE</h4>
        <div id="beforeList" class="list">

          <div class="item d-flex justify-content-between" v-for="item in before" v-on:click="complete(item.title, item.regdate)">
            <h6 class="item-title" >{{ item.title }}</h6>
            <span class="item-regdate">{{ item.regdate }}</span>
          </div>

        </div>
      </div>

      <div class="col-md-6">
        <h4 class="listTitle" >COMPLETE</h4>
        <div id="completeList" class="list">

          <div class="item d-flex justify-content-between" v-for="item in after">
            <h6 class="item-title" >{{ item.title }}</h6>
            <span class="item-regdate">{{ item.regdate }}</span>
          </div>

        </div>
      </div>

    </div>

    <!-- -->

    <hr/>

    <div class="row mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addBtn" v-on:click="add">ADD</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="30글자미만으로입력" v-model="newItem">
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
      newItem: '',
      before: [
        // {title: '장보기', regdate: new Date()},
      ],
      after: []

    }
  },
  methods: {
    test: function(title){
      console.log('test : ', title);
    },
    add: function(){

      var item = {title: this.newItem , regdate: this.getDate()};
      this.newItem = '';
      this.before.push(item);
    },
    complete: function(title, regdate){
      for(var i = 0; i < this.before.length; i++)
        if(this.before[i].title == title)
          this.before.splice(i, 1);
      this.after.push({title: title, regdate: regdate});
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
