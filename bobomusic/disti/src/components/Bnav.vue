<template>
  <div 
    class="nav"
  >
    <ul>
      <li 
        class="gray"
        @click="goback"
      ></li>
      <li>{{this.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'uc-nav',
    props:['title'],
    components:{},
    mounted(){},
    updated(){},
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .nav{height:0.42rem ;width:100%; position:fixed;top:0;left:0; background:#ff5979; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:100%;height:100%; margin:0 auto;display: flex;}
  .nav ul li:first-child{width:0.29rem;height:100%; background:url(../assets/image/back_ico.png) no-repeat 0 0; background-size:0.13rem;background-position:2px ; margin:0 0 0 0.22rem;}
  .nav ul li{
      display: flex;
      align-items: center;
      font-size: 0.19rem;
      color: #fff;
  }

</style>
