<template>
  <div id="app">
      <Loading v-if="$root.bLoading"/>
    <Header v-if="$root.bheader"/>
  
    <router-view></router-view>
    <Footer v-if="$root.bfoot"/>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer.vue';
import Loading from '../components/Loading'
export default {
  name: 'App',
  components: {
    Header,Footer,Loading
  },
  watch:{
      $route:{
      handler(nextValue){
        console.log('路由变化了',nextValue);
        let path = nextValue.path;
        if(/login|register|detail/.test(path)){//home follow column
          this.$root.bheader = this.$root.bfoot=false;
        }else{
           this.$root.bheader=this.$root.bfoot=true;
        }
      },
    }
  }
}
</script>

<style>
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
