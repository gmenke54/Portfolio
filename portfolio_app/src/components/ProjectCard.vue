<template>
  <div class="cont">
    <img :src="project.images[0]" alt="Project Image">
    <div class="project-name">{{project.name}}</div>
    <div class="line"></div>
  </div>
  
</template>

<script>
export default {
  name: 'TechCard',
  props: {
    project: Object
  },
   data:() => ({

   }),
}
</script>

<style scoped>
.line{
  width: 80vw;
  border: 1px solid black;
  border-radius: 5px;
}

</style>