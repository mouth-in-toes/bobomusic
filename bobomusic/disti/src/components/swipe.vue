<template>
    <swipe class="my-swipe" :auto = "5000" :speed="700" :showIndicators='false'>
         <swipe-item v-for="item of data" :key="item._id" 
        class="swipecont"  >
            <img :src=" item.images" alt="" />
            <div class="text-box" v-if = 'title'>
          <h2>{{item.suptitle}}</h2>
          <p>{{item.subtitle}}</p>
        </div>
      </swipe-item>
    </swipe>
</template>

<script>
export default {
        name: 'swiper',
        props: ['data', 'apiName','title'],
        data() {
          return {

         }
                 },
       Options:{
            speed:2100
        }
}
</script>

<style scoped>
.my-swipe {
  
  height: 1.9rem;
  width: 100%;
  color: #fff;
  text-align: center;
  overflow: hidden;
}
 .my-swipe .swipecont{

     width: 100%;
    height: 1.9rem;
 }
.my-swipe .swipecont img{
     width: 100%;
    height: 1.9rem;
    display: block;
}
.my-swipe .swipecont .text-box {
    width:100%;
    padding: 0 0.3rem;
    height: 0.64rem;
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }
 .my-swipe .swipecont .text-box h2 {
    font-size: 0.2rem;
    font-weight: normal;
    margin-top: 0.1rem;
    line-height: 100%;
    margin-bottom: 0.16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-box p {
    line-height: 100%;
  font-size: 0.13rem;
  }
</style>