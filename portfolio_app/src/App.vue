<template>
  <div>
    <div class="nav">
      <router-link to="/">GrantMenke.com</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F0F2F4;
  min-height: 100vh;
}

body{
  margin: 0
}

a, .a{
  text-decoration: none;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #3181CE;
  }
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 12px;
  background-color: white;
}

a:hover, .a:hover {
  background-color: rgb(233, 233, 233);
}

.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1.3rem;
  padding: 5px 0 5px 0;
  font-weight: bold;
  background-color: white;
  border-bottom: 0.5px solid #E7E9EB;
  margin-bottom: 10px;
}

</style>
