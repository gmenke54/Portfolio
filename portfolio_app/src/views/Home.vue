<template>
  <div class="home">
    <div class="img-cont">
      <img alt="Profile Picture" class="prof" src="../assets/headshot.png">
      <div class="word-cont">
        <div class="name">Grant Menke</div>
        <div class="title">Full Stack Software Engineer</div>
        <!-- <div class="title">Full Stack React/Node Developer</div> -->
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
  <div class="brand">Full-stack software engineer with roots in STEM education and Medicine, I love to learn, think logistically, and am always building. My methodical thought process and craftsmanship allow me to plan and develop efficient, scaleable, and traceable back-end systems. </div>
  <div>My Skills</div>
  <div class="techs-cont">
    <div  v-for="tech in techs" :key="tech.id">
      <TechCard :tech="tech" />
    </div>
  </div>

  <div>My Builds</div>
  <div  v-for="project in projects" :key="project.id">
    <ProjectCard :project="project" />
  </div>
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
import TechCard from '../components/TechCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import js from '../assets/techs/javascript.png'
import react from '../assets/techs/react.png'
import node from '../assets/techs/node.png'
import python from '../assets/techs/python.png'
import css from '../assets/techs/css.png'
import django from '../assets/techs/django.png'
import express from '../assets/techs/express.png'
import git from '../assets/techs/git.png'
import github from '../assets/techs/github.png'
import html from '../assets/techs/html.png'
import mongodb from '../assets/techs/mongodb.png'
import mongoose from '../assets/techs/mongoose.png'
import postgresql from '../assets/techs/postgresql.png'
import redux from '../assets/techs/redux.png'
import sequelize from '../assets/techs/sequelize.png'
import vue from '../assets/techs/vue.png'
import vuex from '../assets/techs/vuex.png'
import chart from '../assets/techs/chart.png'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    TechCard,
    ProjectCard
  },
  data:() => ({
    techs: [
      { id: 1, name: "JavaScript", url: js },
      { id: 2, name: "Python", url: python },
      { id: 3, name: "Node.js", url: node },
      { id: 4, name: "Express.js", url: express },
      { id: 5, name: "React", url: react },
      { id: 6, name: "Vue.js", url: vue },
      { id: 7, name: "Django", url: django },
      { id: 8, name: "PostgreSQL", url: postgresql },
      { id: 9, name: "Sequelize", url: sequelize },
      { id: 10, name: "Mongoose", url: mongoose },
      { id: 11, name: "MongoDB", url: mongodb },
      { id: 12, name: "Redux", url: redux },
      { id: 13, name: "Vuex", url: vuex },
      { id: 14, name: "Chart.js", url: chart },
      { id: 15, name: "Git", url: git },
      { id: 16, name: "GitHub", url: github },
      { id: 17, name: "HTML5", url: html },
      { id: 18, name: "CSS3", url: css },
    ],
    images: [
      { id: 1, url: dash },
      { id: 2, url: feed },
      { id: 3, url: profile },
      { id: 4, url: search },
      { id: 5, url: trade },
      { id: 6, url: monopoly },
    ],
    projects: [
      {
      id: 1, 
      github: "https://github.com/gmenke54/My_Keto_Pal_Front_End", 
      deployed: "https://myketopal.surge.sh/", 
      images: [dash, feed, profile],
      name: "MyKetoPal Nutrient Tracking Platform",
      description: "Utilized PostgreSQL, Python, Django, and Vue.js to build a full stack mobile optimized application that tracks user nutrient consumption."
      },
      {
      id: 2,
      github: "https://github.com/gmenke54/u2_project_FBB_Trade_Analyzer",
      deployed: "https://glacial-brook-94586.herokuapp.com/",
      images: [trade, search],
      name: "NBA Fantasy Basketball Trade Analyzer",
      description: "Utilized MERN stack (MongoDB, Express, React, Node.js) to build a full stack application that efficiently tracks and analyzes live NBA stats."
      },
      {
      id: 3,
      github: "https://github.com/gmenke54/u1_project_monopoly",
      deployed: "https://grantopoly.surge.sh/",
      images: [monopoly, instruct, card],
      name: "Monopoly Game Clone",
      description: "Browser-based Monopoly clone written in vanilla JavaScript, which I built two weeks after writing my first ever line of code."
      }
    ]
  })
}
</script>

<style>
.techs-cont{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
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
