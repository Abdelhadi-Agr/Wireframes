<template>
  <div class="classcanvas" id="scrollid">
      <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
name:'Canva'

}
</script>

<style scoped>
#canvas{
  /*width: 840px;
  height: 600px;*/
  background-color: white;
   margin-left: 2px;
  margin-top: 2px;
  margin-right: 2px; 

  /*display: inline-block;
  border: 1px solid black;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.603);*/
  cursor: pointer;
  box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
#scrollid{
  width: calc(100%-240);
  height: calc(100%-35);
  max-height:520px;
  /*display: flex;
  height: 500px;
  width: 900px;*/
  margin-left: 247px;
  margin-top: 5px;
  margin-right: 5px;
  background-color: rgb(105, 102, 102);
  overflow: scroll;
}
</style>