<template>
    <div class="logbox">
        <Bnav title = '快速注册'/>
        <div class="logo">
            <img src="../assets/image/music.png" alt="">
        </div>
        <div class="btncont">
            <Ipt type="text" v-model.lazy="username" placeholder = "请输入您的账号"/>
            <Ipt type="password" v-model.lazy="password"  placeholder = "请输入您的密码"/>
            <Button text = '注册' @click="reg"/>
            <div class="wrong" v-if="errMess"><p>{{errMess}}</p></div>
            <div class="reg">
                 <router-link to = '/login' tag = 'p'> 立即登录 </router-link>
                 
            </div>
        </div>
    </div>
</template>
<script>
    import Button from '../components/Button'
    import Ipt from '../components/Ipt'
    import Bnav from '../components/Bnav'
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            errMess:''
        }
    },
    components:{
        Button,Ipt,Bnav
    },
    methods:{
        reg(){
        let fromData = new FormData();// js类型
        fromData.append('username',this.username)
        fromData.append('password',this.password)
        this.$axios({
          url:'/api/reg',
          method:'post',
          data:fromData
        }).then(
          res => {
               if(res.data.err===0){
              this.$router.replace('/login')
            }else{
              this.errMess=res.data.msg
            }
          }
        )
        
      }
    },
    mounted(){
      
    }
}
</script>
<style scoped>
.logbox{
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: #fff;
        flex:1;
    }
.logbox .logo{
    display: flex;
    margin: 1.2rem 0 0.42rem;
    justify-content: center;
    width: 100%;
    height: 1.09rem;
}
.logbox .logo img{
    width: 0.92rem;
    height: 100%;
}
.logbox .reg{
    display: flex;
    margin-top: 0.15rem;

    justify-content: space-between;
    padding:0 0.5rem;
}
.logbox .reg p{
    font-size: 0.14rem;
    color: #aaa9a9;
}
.logbox .wrong{

    display: flex;
    justify-content: center;
    height: 0.5rem;
}
.logbox .wrong p{
    width: 2.74rem;
    border:2px solid #e45868;
    background:#ffb986;
  
    color: red;
    line-height: 0.5rem;
    font-size: 0.15rem;
}
</style>