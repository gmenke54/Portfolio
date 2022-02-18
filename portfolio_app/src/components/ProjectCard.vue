<template>
  <div class="cont">
    <div>
      <div class="picture-cont">
        <div class="project-name">{{project.name}}</div>
        <img :src="project.images[0]" alt="Project Image">
      </div>
      <div class="bullets-cont">
        <div v-for="bullet in project.bullets" :key="bullet.index">{{bullet}}</div>
      </div>
    </div>


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