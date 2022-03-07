<template>
  <div class="cont">
    <img class="tech-logo" :src="tech.url" alt="Tech Logo">
    <div class="tech-name">{{tech.name}}</div>
  </div>
  
</template>

<script>
export default {
  name: 'TechCard',
  props: {
    tech: Object
  },
   data:() => ({

   }),
}
</script>

<style scoped>
.tech-logo{
  width: clamp(30px, 6vw, 100px);
  cursor: pointer;
}
.tech-name{
  font-size: clamp(9px, 1.2vw, 18px)
}
.cont{
    margin: clamp(2px, 1.2vw, 25px)
}

</style>