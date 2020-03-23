<template>
    <div class="Home-contain">
        <div class="contain">
              <swipe :data = 'bannerDt' :title ='true'/>
              <Bannav :navlist = 'navlist' />
             <Titlemore title='官方歌单'/>
             <Songlist :data = 'Songlist.offical'/>
              <Titlemore title='达人歌单'/>
             <Songlist :data = 'Songlist.expert'/>
        </div>
    </div>
    
</template>

<script>

import Titlemore from '../components/Titlemore'
import Songlist from '../components/Songlist'
import Bannav from '../components/Bannav'
import Swipe from '../components/swipe'
export default {
     name: 'Home',
     data(){
         return{
            bannerDt:[],
            navlist:[
                {images:'/data/images/ban_for.png',title:'每日推荐'},
                {images:'/data/images/ban_rang.png',title:'排行榜'},
                {images:'/data/images/ban_new.png',title:'新歌'},
                {images:'/data/images/ban_move.png',title:'动态'},
                {images:'/data/images/ban_more.png',title:'更多'},
                ],
            Songlist:{
                offical:[],
                expert:[]
            }
         }
     },
     mounted(){
         //请求歌单的数据
        this.$axios({
            url:'/api/goods/offical',
            params:{}
        }).then(res=>{
           this.Songlist.offical=res.data.data
        }),
         this.$axios({
            url:'/api/goods/expert'
        }).then(res=>{
           this.Songlist.expert=res.data.data
        }),
         this.$axios({
            url:'/api/goods/banner'
        }).then(res=>{
           this.bannerDt=res.data.data
        })
     },
    components: {
       Titlemore,Songlist,Bannav,Swipe
  }
}
</script>
<style scoped>
.Home-contain{
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: #fff;
        flex:1;
    }
  
</style>
    
