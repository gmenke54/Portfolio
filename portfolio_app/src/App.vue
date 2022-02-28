<template>
  <div>
    <div class="nav">
      <router-link to="/">GrantMenke.com</router-link>
      <router-link to="/about">About</router-link>
       <Toggle v-model="value" class="toggle-blue" offLabel="☀️" onLabel="🌙" @change="this.toggle()"/>
    </div>
    <router-view/>
  </div>

</template>

<script>
import Toggle from '@vueform/toggle'
export default {
  name: 'App',
  data: ()=>({
    value: null
  }),
  components: {
    Toggle
  },
  methods: {
    toggle(){
      if (this.$store.state.mode==='light'){
        this.$store.commit('setMode', 'dark')
      } else {
        this.$store.commit('setMode', 'light')
      }
    }
  }
}
</script>


<style lang="scss">
.toggle-blue {
  --toggle-bg-on: #3181CE;
  --toggle-ring-color: none;
  --toggle-border-on:#3181CE;
  --toggle-width: 3rem;
  margin-top: 9px;
}
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

<style src="@vueform/toggle/themes/default.css"></style>