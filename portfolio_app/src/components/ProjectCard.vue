<template>
  <div class="cont">
    <div class="line"></div>
    <vue-flip active-click width="45vw" height="30vw" >
      <template v-slot:front class="picture-cont">
        <img :src="project.images[0]" alt="Project Image">
      </template>
      <template v-slot:back>
        <div class="bullets-cont">
          <div class="project-name">{{project.name}}</div>
          <div class="project-description">{{project.description}}</div>
          <div v-for="bullet in project.bullets" :key="bullet.index">-{{bullet}}</div>
        </div>
      </template>
    </vue-flip>
  </div>
</template>

<script>
import VueFlip from 'vue-flip';
export default {
  name: 'TechCard',
  props: {
    project: Object
  },
  components: {
    'vue-flip': VueFlip
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
.flex-row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flip-container{
  margin: 0 auto;
  transition: all 0.5s;
  cursor: pointer
}
.flip-container:hover{
  transform: scale(1.04);
}
.back{
  margin: auto 0;
  height: 30vw;
}
.bullets-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%
}

</style>