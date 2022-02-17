<template>
  <div class="home">
    <div class="img-cont">
      <img alt="Profile Picture" class="prof" src="../assets/headshot.png">
      <div class="word-cont">
        <div class="name">Grant Menke</div>
        <div class="title">Full Stack React/Node Developer</div>
      </div>

    </div>
  <Carousel class="carousel" :autoplay="3000" :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="image in this.images" :key="image.id">
      <div class="carousel__item">
      <img :src="image.url" />
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
import dash from '../assets/dashboard.png'
import feed from '../assets/feed.png'
import monopoly from '../assets/monopoly.png'
import profile from '../assets/profile.png'
import search from '../assets/search.png'
import trade from '../assets/trade.png'
import instruct from '../assets/instruct.png'
import card from '../assets/card.png'

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
      { id: 1, url: dash },
      { id: 2, url: feed },
      { id: 3, url: profile },
      { id: 4, url: search },
      { id: 5, url: trade },
      { id: 6, url: monopoly },
    ],
    projects: [
      {id: 1, github: "https://github.com/gmenke54/My_Keto_Pal_Front_End", deployed: "https://myketopal.surge.sh/" , images: [dash, feed, profile] },
      {id: 2, github: "https://github.com/gmenke54/u2_project_FBB_Trade_Analyzer", deployed: "https://glacial-brook-94586.herokuapp.com/" , images: [trade, search] },
      {id: 3, github: "https://github.com/gmenke54/u1_project_monopoly", deployed: "https://grantopoly.surge.sh/" , images: [monopoly, instruct, card] }
    ]
  })
}
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel{
  width: 91vw;
  margin-top: 10px;
}
img{
  border-radius: 5px;
  width: 45vw;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 0.7;
  transform: rotateY(0);
  transform: scale(.8) translate(-10px);
        z-index: 1
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.6) translate(-10px);

}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.6) translate(10px);


}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
  z-index: 2;
    opacity: 1;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: rgb(27, 57, 156);
}
:root {
    --vc-clr-primary: rgb(27, 57, 156);
    --vc-clr-secondary: rgb(152, 170, 218);
}
.prof{
  width: 17em;
  border-radius: 50% 30% 0 50%
}
.img-cont{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.name{
  color: rgb(59, 59, 59);
  top: 43.5%;
  font-weight: 700;
  font-size: 75px;
}
.word-cont{
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -70px;
}
.title{
  margin-top: -20px;
  color: rgb(59, 59, 59);
  font-size: 20px;
}
</style>
