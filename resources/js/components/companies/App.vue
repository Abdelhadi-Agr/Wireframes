<template>
  <Draw :id_project="id_project"/>
  <Canva/>
</template>
<script>
import Draw from './components/Draw.vue'
import Canva from './components/Canva.vue'

export default {
  name: 'App',
   props: ['id'],
  setup(props) {
        console.log("the id of user is :: "+props.id);
        
    },
    data:function(){
      return{
        id_project:this.id
      }
    },
  components: {
    Draw,
    Canva,
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: none;
}
</style>
