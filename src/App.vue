<template>
  <div id="app" class="container">
    <h2>TEST PAGE</h2>
    <input type="text" v-model="test" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      some: 'SomeValue',
      count: 0
    }
  },
  computed:{
    test: function(){
      return this.some.split('').reverse().join('');
    }
  },
  methods: {

  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
