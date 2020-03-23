<template>
    <div class="user-contain">
       <div class="banner">
             <h2><img :src=' $baseUrl+ user.icon' alt=""/></h2>
             <div class="nikecont"><p class="nikenameP">{{user.username}}</p></div>
              <div class="user-box">
                     <a >已登录</a>
                     <a href="javascript:" @click = "logout">注销</a>
              </div>
        </div>
        <div class="docList">
                <ul>
                <li class="gk-text">
                    <i><img src="../assets/image/user_icon.png" alt=""></i>
                    <p>个人资料</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                  <li class="gk-text">
                    <i><img src="../assets/image/love_icon.png" alt=""></i>
                    <p>我喜欢</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                <li class="gk-text">
                    <i><img src="../assets/image/music_icon.png" alt=""></i>
                    <p>本地歌曲</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                 <li class="gk-text">
                    <i><img src="../assets/image/song_list_icon.png" alt=""></i>
                    <p>我的歌单</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                    <li class="gk-text">
                    <i><img src="../assets/image/collec_icon.png" alt=""></i>
                    <p>我的收藏</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                 <li class="gk-text">
                    <i><img src="../assets/image/shop_icon.png" alt=""></i>
                    <p>已够买</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                  <li class="gk-text">
                    <i><img src="../assets/image/set_icon.png" alt=""></i>
                    <p>设置</p>
                    <b><img src="../assets/image/arrow_icon.png" alt=""></b>
                </li>
                </ul>
             
              
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

   
    beforeRouteEnter(to,from,next){
      
      let local = window.localStorage.getItem('user')
      
      if(!local){
        next('/login')
        return;
      }
      
      axios({
        url:'/api/user',
        params:{
            _id:JSON.parse(local)._id
        }
      }).then(
        res=>{
          if(res.data.err==0){
            next(_this=>_this.user=res.data.data)
          
          }else{
            next('/login')
          }
        }
      )
    },

    data(){
        return{
            bannerDt:{images:'/data/images/banner1.png'},
            user:{}
        }
        
    },
    mounted(){

    },
    components:{
    
      },
      methods:{
         logout(){
        //删除 本地 token
        window.localStorage.removeItem('user')
        //发送注销请求
        this.$router.push('/home')
      }
      }
}

</script>
<style scoped>
  .user-contain{
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: #f2f2f2;
        flex:1;
    }
     .banner {
    width: 100%;
      height: 1.9rem;
    position: relative;
    overflow: hidden;
    background: url("../assets/image/userbanner.png");
    background-size: 100%;
  
  }
    .banner h2{width:0.94rem; height:0.94rem; margin:0.17rem auto 0 ;border-radius: 50%;border:3px solid #fc5776}
    .banner h2 img{width:100%; border-radius:50%}
    .banner .user-box{width:100%; font-size:.35rem; color:#fff; margin:0 auto; margin-top:0.08rem;display: flex;justify-content: center;}
    .banner .user-box a{color:#fff;font-size: 0.15rem;margin: 0 0.14rem 0rem;padding: 0.02rem 0.15rem;}
    .banner .user-box a:first-child{background:#f68787;border-radius: 5px;}
    .banner .user-box a:last-child{background:#fff;border-radius: 5px;color:#000; font-weight:900}

    .banner .docList{width:100%; margin:0 auto; margin-top:0.05rem;}
    
    .docList ul li{
       
        height: 0.38rem;
        background:#fff;
       border-bottom:1px;
        padding: 0 0.22rem 0 0.3rem;
    }
    .docList ul li:first-child, .docList ul li:last-child{
        border:none;
        margin: 0.1rem 0 ;
    }
     
    .docList ul li b{width:0.2rem;height:0.24rem;  float:right;margin-top: 0.08rem;}
    .docList ul .gk-text i{width:0.22rem;height:0.25rem; float:left;margin-top: 0.04rem;}
     .docList ul .gk-text img{width: 100%;height: 100%;}
    .gk-text p{ float:left; font-size:0.17rem;margin-left:0.33rem; margin-top:0.06rem;}
    .nikecont{
        width: 100%;
        height: 0.23rem;
        display: flex;
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        font-size: 0.2rem;
    }
</style>