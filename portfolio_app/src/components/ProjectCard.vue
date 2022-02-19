<template>
  <div class="cont">
    <div class="line"></div>
    <div class="project-name">{{project.name}}</div>
    <div>
      <img :src="project.images[0]" alt="Project Image">
    </div>
    <div>
      <div class="bullets-cont">
        <div class="project-description">{{project.description}}</div>
        <div v-for="bullet in project.bullets" :key="bullet.index">-{{bullet}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechCard',
  props: {
    project: Object
  },
  components: {
  },
   data:() => ({

   }),
}
</script>

<style scoped>
.line{
  width: 80vw;
  border: 1px solid rgb(80, 80, 80);
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.bullets-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  width: 50vw;
  margin: 0 auto;
  border-radius: 10px;
}
img{
  width: 50vw;
}
</style>