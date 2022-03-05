<template>
  <div class="cont">
    <div class="flex-row" :class="reverse">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="project.images[0]" alt="Project Image">
            <div class="flip-card-back">
              <div class="project-description">{{project.description}}</div>
              <div class="bullets-cont">
                <div class="bullet" v-for="bullet in project.bullets" :key="bullet.index">-{{bullet}}</div>
              </div>
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
        <div class="btn-bar">
          <div class="btn" @click="this.goGitHub()">GitHub</div>
          <div class="btn" @click="this.goDeploy()">Deployed</div>
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
   },
   methods: {
     goDeploy(){
       window.open(this.project.deployed)
     },
     goGitHub(){
       window.open(this.project.github)
     }
   }
}
</script>

<style scoped>
.btn-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.btn{
  border: 2.5px solid #242424;
  font-size: clamp(8px, 0.9vw, 16px);
  border-radius: 5px;
  color: #464646;
  cursor: pointer;
  padding-top: clamp(2px, .4vw, 10px);
  padding-bottom: clamp(2px, .4vw, 10px);
  padding-right: clamp(12px, 2vw, 60px);
  padding-left: clamp(12px, 2vw, 60px);
}
.btn:hover{
  background-color: #F0F2F4;
  border: 2.5px solid #3181CE;
  color: #383838;

}
.info-card{
  margin: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.techs{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: clamp(110px, 23vw, 390px);
  justify-content: center
}
.tech-logo{
  width: clamp(30px, 6vw, 100px);
  margin: 0.5vw
}
.line{
  width: 90%;
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
  font-size: clamp(8px, 1vw, 26px);
  color: rgb(71, 71, 71);
  margin-top: 1vw;
}
.project-name{
  color: rgb(59, 59, 59);
  font-weight: 700;
  font-size: clamp(25px, 4.5vw, 80px)
}
.project-title{
  margin-top: clamp(-5px, -0.8vw, -12px) ;
  color: rgb(59, 59, 59);
  font-size: clamp(9.5px, 1.4vw, 25px)
}
.flex-row{
  width: 98vw;
  max-width: 1398px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.row-reverse{
  flex-direction: row-reverse;
}
.flip-card-front{
  overflow: hidden;
  border-radius: 10px;
  width: clamp(240px, 45vw, 1100px); 
  height: clamp(120px, 24.5vw, 610px);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.flip-card-back{
  background-color: white;
  margin-top: -3.5%;
  /* transform: translateY(90%); */
  transition: .5s ease-in-out;
  position: relative;
  height: 100%;
  z-index: 5;
  text-align: left;
  padding: 4%;
  cursor: default;
  border-radius: 10px;
  box-shadow: 0 3px 7px 0 rgba(0,0,0,0.2);

}
.flip-card-front:hover > .flip-card-back{
  transform: translateY(-86%);
  transition: .5s ease-in-out;
}
/* .flip-card {
  width: clamp(300px, 45vw, 1100px);
  perspective: 1000px;
  height: clamp(150px, 24.5vw, 610px);
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
} */
.bullet{
  margin: 2px 0
}
/* .flip-card:hover .flip-card-inner {
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
    cursor: default
} */
.project-description{
  font-size: clamp(9px, 1.2vw, 31px);
  text-align: center
}
</style>