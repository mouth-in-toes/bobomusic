<template>
  <div class="loading">
    <div class="spinner">
        <img src="../assets/image/music.png" alt="">
    </div>
    <div class="font">loading</div>
  </div>
</template>

<script>
  export default {
    name:'loading',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
    .loading{
    flex: 1;
    height: 80%;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background:#fff
    }
  .spinner {
    width: 60px;
    height: 60px;
    position: fixed;
    left:50%;
    top:50%;
    margin-left:-30px;
    margin-right:-30px;
    -webkit-animation: rotateplane 1s infinite linear;
    animation: rotateplane 1s infinite linear;
  }
  .spinner img{
      height: 100%;
      width:100%
  }
   .font{
        position: fixed;
        left:50%;
        top:59%;
        margin-left:-35px;
        margin-right:-30px;
        color: #fc5d7b;
        font-size: 0.2rem;
   }

  @-webkit-keyframes rotateplane {
    0% { -webkit-transform: perspective(120px)rotatez(0deg) }
    50% { -webkit-transform: perspective(120px) rotatez(180deg) }
    100% { -webkit-transform: perspective(120px) rotatez(360deg)  }
  }
   

</style>
