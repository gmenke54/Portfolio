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
  width: 125px;
}
.cont{
    margin: 10px;
}

</style>