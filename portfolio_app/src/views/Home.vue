<template>
  <div class ="flex-row">
    <div class="resume" @click="this.download()">Resume</div>
    <div class="side"></div>
    <div class="home">
      <div class="img-cont">
        <img alt="Profile Picture" class="prof" src="../assets/headshot.png">
        <div class="word-cont">
          <div class="name" >Grant Menke</div>
          <div class="title">Full Stack Software Engineer</div>
          <!-- <div class="title">Full Stack React/Node Developer</div> -->
        </div>
      </div>
    <Carousel class="carousel" :autoplay="3000" :itemsToShow="3.95" :wrapAround="true">
      <Slide v-for="image in this.images" :key="image.id">
        <div @click="goto(image.goto)" class="carousel__item">
        <img :src="image.url" />
        </div>
      </Slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
    <div class="brand">Full-stack software engineer with roots in STEM education and Medicine, I love to learn, think logistically, and am always building. My methodical thought process and craftsmanship allow me to plan and develop efficient, scaleable, and traceable back-end systems. </div>
    <div class="techs-cont">
      <div  v-for="tech in techs" :key="tech.id">
        <TechCard :tech="tech" @click="goto(tech.goto)"/>
      </div>
    </div>

    <div  v-for="project in projects" :key="project.id">
      <div :ref="project.ref">
        <ProjectCard :project="project" /> 
      </div>
    </div>
    </div>
    <div class="side"></div>
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
import stats from '../assets/stats.png'
import books from '../assets/books.png'
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

import axios from 'axios';
import grantmenke from '../assets/grantmenke.png'

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
  methods:{
    async download(){
      const result = await axios.get(grantmenke, {responseType: 'blob' });
      const blob = new Blob([result.data], { type: 'image/png' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'grantmenke_resume';
      link.click();
      URL.revokeObjectURL(link.href)
    },
    goto(refName) {
      console.log(refName)
        var element = this.$refs[refName];
        console.log(element[0].offsetTop)
        var top = element[0].offsetTop;
        console.log(top)
        // window.scrollTo(0, top);
        window.scrollTo({
  top: top,
  left: 0,
  behavior: 'smooth'
})
    }
  },
  data:() => ({
    techs: [
      { id: 1, name: "JavaScript", url: js, goto: 'p4' },
      { id: 2, name: "Python", url: python, goto: 'p4' },
      { id: 3, name: "Node.js", url: node, goto: 'p2' },
      { id: 4, name: "Express.js", url: express, goto: 'p2' },
      { id: 5, name: "React", url: react, goto: 'p2' },
      { id: 6, name: "Vue.js", url: vue, goto: 'p4' },
      { id: 7, name: "Django", url: django, goto: 'p4' },
      { id: 8, name: "PostgreSQL", url: postgresql, goto: 'p3' },
      { id: 9, name: "Sequelize", url: sequelize, goto: 'p3' },
      { id: 10, name: "Mongoose", url: mongoose, goto: 'p2' },
      { id: 11, name: "MongoDB", url: mongodb, goto: 'p2' },
      { id: 12, name: "Redux", url: redux, goto: 'p3' },
      { id: 13, name: "Vuex", url: vuex, goto: 'p4' },
      { id: 14, name: "Chart.js", url: chart, goto: 'p4' },
      { id: 15, name: "Git", url: git, goto: 'p1' },
      { id: 16, name: "GitHub", url: github, goto: 'p1' },
      { id: 17, name: "HTML5", url: html, goto: 'p1' },
      { id: 18, name: "CSS3", url: css, goto: 'p1' },
    ],
    images: [
      { id: 1, url: dash, goto: 'p4' },
      { id: 2, url: feed, goto: 'p4' },
      { id: 3, url: profile, goto: 'p4' },
      { id: 4, url: search, goto: 'p2' },
      { id: 5, url: trade, goto: 'p2' },
      { id: 6, url: stats, goto: 'p2' },
      { id: 7, url: books, goto: 'p3' },
      { id: 8, url: monopoly, goto: 'p1' },
    ],
    projects: [
      {
      id: 1, 
      github: "https://github.com/gmenke54/My_Keto_Pal_Front_End", 
      deployed: "https://myketopal.surge.sh/", 
      images: [dash, feed, profile],
      name: "MyKetoPal",
      title: "Nutrient Tracking Platform",
      description: "Utilized PostgreSQL, Python, Django, and Vue.js to build a full stack mobile optimized application that tracks user nutrient consumption.",
      bullets: ["Employed many-to-many and one-to-many relationships in Django to create an efficient and scalable back-end system.", "Setup a full CRUD Django REST framework and leveraged axios within the front-end to make API calls and access data.", "Integrated Django REST framework token based user authentication to enforce API authorization for CRUD functionality.", "Self-taught and implemented a centralized Vuex store for efficient and predictable global state management within Vue.js.", "Installed and integrated three separate Vue.js component libraries to receive user input and aesthetically render data on screen.", "Managed and deployed two separate GitHub repositories making frequent commits throughout development of the application."],
      techs: [python, js, vue, django, vuex, chart],
      ref: "p4"
      },
      {
      id: 2,
      github: "https://github.com/gmenke54/u2_project_FBB_Trade_Analyzer",
      deployed: "https://nba-hub.herokuapp.com/",
      images: [trade, search],
      name: "NBA Hub",
      title: "Fantasy Basketball Trade Analyzer",
      description: "Utilized MERN stack (MongoDB, Express, React, Node.js) to build a full stack application that efficiently tracks and analyzes live NBA stats.",
      bullets: ["Made RESTful API fetch calls to the back-end handling all create, read, update, delete (CRUD) operations.", "Configured React Router and utilized React state and hooks to develop an interactive application styled with flexbox layouts.", "Built out modular React components that organize user input with the use of a database of teams and players.", "Created a reusable search component that immediately queries multiple external API’s and live renders only current NBA players along with their up-to-date stats and pictures sorted by relevance."],
      techs: [js, react, node, express, mongoose, mongodb],
      ref: "p2"
      },
      {
      id: 3,
      github: "https://github.com/gmenke54/GreatReads",
      deployed: "https://greatreadz.herokuapp.com/",
      images: [books],
      name: "GreatReads",
      title: "Book Reccomendation Platform",
      description: "Utilized PERN stack (PostgreSQL, Express, React, Node.js) with a team of 4 to collaboratively build a full stack application that tracks and stores users' favorite books and reviews of those books.",
      bullets: ["Implemented user authentication leveraging JSON web tokens to enforce API authorization.", "Integrated React Redux on the front-end to store global data as a single source of truth.", "Queried the Google Books API to allow users to save books (and 15 associated data points) to their account page quickly.", "Employed Git version control and cohesive group git practices to co-develop this project simultaneously with my peers.", "Leveraged Heroku to initialize and deploy the in production database and front-end web application."],
      techs: [postgresql, sequelize, redux, react, express, node],
      ref: "p3"
      },
      {
      id: 4,
      github: "https://github.com/gmenke54/u1_project_monopoly",
      deployed: "https://grantopoly.surge.sh/",
      images: [monopoly, instruct, card],
      name: "Grantopoly",
      title: "Monopoly Game Clone",
      description: "Browser-based Monopoly clone written in vanilla JavaScript, which I built two weeks after writing my first ever line of code.",
      bullets: ["Utilized vanilla Javascript in creating object oriented methods to iterate through each player's turn and added event listeners to the DOM to track user interaction.", "Deployed the web application to a remote server by installing and utilizing Surge.sh.", "Leveraged Git for version control."],
      techs: [js, html, css, git, github],
      ref: "p1"
      }
    ]
  })
}
</script>

<style>
.carousel__item{
  cursor: pointer;
}
.resume{
  position: fixed;
  right: 12px;
  cursor: pointer;
  background-color: #3181CE;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  z-index: 3;
}
.resume:hover{
  background-color: #4b97dd;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.builds-title{
  color: rgb(59, 59, 59);
  font-weight: 700;
  font-size: 4.5vw;
}
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
  max-width: 1398px;
  /* justify-content: center; */
}
.side{
  width: 100%
}
.carousel{
  width: 87vw;
  margin-top: 10px;
}
img{
  border-radius: 5px;
  width: clamp(300px, 45vw, 1100px)
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
  border: 5px solid #F0F2F4;
  background-color:  #3181CE;
}
:root {
    --vc-clr-primary: #3181CE;
    --vc-clr-secondary: #3182ce49;
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
.brand{
  margin: 20px;
  color: rgb(59, 59, 59);
  font-size: clamp(10px, 1.6vw, 22px);
}

</style>
