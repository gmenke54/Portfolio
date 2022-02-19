<template>
  <div class="cont">
    <div class="flex-row" :class="reverse">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="project.images[0]" alt="Project Image">
          </div>
          <div class="flip-card-back">
            <div class="project-description">{{project.description}}</div>
            <div class="bullets-cont">
              <div class="bullet" v-for="bullet in project.bullets" :key="bullet.index">-{{bullet}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-card">
        <div class="project-name">{{project.name}}</div>
        <div class="project-title">{{project.title}}</div>
        <div class="techs">
          <div v-for="tech in project.techs" :key="tech.index">
            <img class="tech-logo" :src="tech" alt="Tech Logo">
          </div>
        </div>
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
  components: {
  },
   data:() => ({

   }),
   computed: {
     reverse(){
       if (this.project.id%2 === 0){
         return "row"
       } else {
         return "row-reverse"
       }
     }
   }
}
</script>

<style scoped>
.info-card{
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.techs{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 23vw;
  justify-content: center
}
.tech-logo{
  width: 6vw;
  margin: 0.5vw
}
.line{
  width: 80vw;
  border: 1px solid rgb(80, 80, 80);
  border-radius: 5px;
  margin: 15px auto;
}
.bullets-cont{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 1vw;
  color: rgb(71, 71, 71)
}
.project-name{
  color: rgb(59, 59, 59);
  font-weight: 700;
  font-size: 4.5vw;
}
.project-title{
  margin-top: -0.8vw;
  color: rgb(59, 59, 59);
  font-size: 1.4vw;
}
.flex-row{
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.row-reverse{
  flex-direction: row-reverse;
}
.flip-card {
  width: 45vw;
  perspective: 1000px;
  height: 24.5vw;
  margin: 10px auto;

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.bullet{
  margin: 2px 0
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  border-radius: 10px;
}

.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
  border-radius: 10px;
    padding: 10px;
}
.project-description{
  font-size: 1.2vw;
  text-align: center
}
</style>