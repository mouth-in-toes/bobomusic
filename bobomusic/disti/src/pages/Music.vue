<template>
    <div class="music-contain">
         <div class="contain">
           <swipe :data = 'bannerDt' :title = 'false'/>
           <Bannav :navlist = 'navlist'/>
             <Titlemore title='风格' />
             <Typelist :data = 'typelist.style'/>
               <Titlemore title='语种'/>
               <Typelist :data = 'typelist.language'/>
               <Titlemore title='主题'/>
                 <Typelist :data = 'typelist.thame'/>
         </div>
             
    </div>
    
</template>

<script>
import Swipe from '../components/swipe'
import Bannav from '../components/Bannav'
import Titlemore from '../components/Titlemore'
import Typelist from '../components/Typelist'
export default {

    name:'music',
    data(){
     return{
        bannerDt:[],
        navlist:[
                {images:'/data/images/music_ban_2.png',title:'歌手'},
                {images:'/data/images/music_ban_1.png',title:'分类歌单'},
                {images:'/data/images/music_ban_3.png',title:'猜你喜欢'},
                {images:'/data/images/music_ban_4.png',title:'一起听'},
                ],
        typelist:{
          style:[],
          language:[],
          thame:[]
        }
        
        

     }
    },
     components: {
        Swipe,Bannav,Titlemore,Typelist
  } ,
  mounted(){
       this.$axios({
            url:'/api/goods/musicban'
        }).then(res=>{
          this.bannerDt = res.data.data
        })
        //  请求歌单的数据
        this.$axios({
            url:'/api/goods/style',
        }).then(res=>{
           res.data.data.forEach((items,index) =>{
              if(index < 3){
                this.typelist.style.push(items)
              }
           })
        }),
         this.$axios({
            url:'/api/goods/language',
        }).then(res=>{
           res.data.data.forEach((items,index) =>{
              if(index < 3){
                this.typelist.language.push(items)
              }
           })
        }),
        this.$axios({
            url:'/api/goods/thame',
        }).then(res=>{
           res.data.data.forEach((items,index) =>{
              if(index < 3){
                this.typelist.thame.push(items)
              }
           })
        })
  }
}

</script>
<style scoped>
.music-contain{
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: #fff;
        flex:1;
        /* font-size: 0.3rem; */
    }
</style>