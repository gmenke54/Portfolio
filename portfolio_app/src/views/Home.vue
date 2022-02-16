<template>
  <div class="home">
    <img alt="Profile Picture" class="prof" src="../assets/headshot.png">
  <Carousel :autoplay="2500" :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="image in this.images" :key="image.id">
      <div class="carousel__item">
      <img  :src="image.url" />
      </div>

    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data:() => ({
      images: [
      { id: 1, url: "https://picsum.photos/300/200?q=1" },
      { id: 2, url: "https://picsum.photos/300/200?q=2" },
      { id: 3, url: "https://picsum.photos/300/200?q=3" },
      { id: 4, url: "https://picsum.photos/300/200?q=4" },
      { id: 5, url: "https://picsum.photos/300/200?q=4" },
      { id: 6, url: "https://picsum.photos/300/200?q=4" },
      { id: 7, url: "https://picsum.photos/300/200?q=4" },
      { id: 6, url: "https://picsum.photos/300/200?q=4" },
      { id: 7, url: "https://picsum.photos/300/200?q=4" },
    ]
  })
}
</script>

<style scoped>
img{
  border-radius: 5px;
}
.prof{
  height: 20em;
  border-radius: 50%
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
  transform: scale(0.95) translate(-10px);
        z-index: 1
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
      /* z-index: 1 */
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);

}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
  border-radius: 20%;
  z-index: 2
}
/* https://github.com/ismail9k/vue3-carousel/issues/17 */
/* change color not working: */
.carousel__prev,
.carousel__next {
	border: 5px solid white;
	background-color: red;
}
:root {
    --carousel-color-primary: red;
}
</style>
