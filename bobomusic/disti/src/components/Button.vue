<template>
  <div class="Button">
    <input 
      type="button" 
      :value="text" 
      class="login-btn" 
      :style="{background:bgColor}"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
  export default {
    name:'Button',
    props:{
      text:{
        type:String,
        default:'按 钮'
      },
      bgColor:{
        type:String,
        default:'#ea4747'
      }
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){}
   
  }
</script>

<style scoped>
    .Button{display: flex;justify-content: center;width: 100%}
  .login-btn{width:2.74rem;height:0.45rem; background:#fff; color:#fff; text-align:center; line-height:0.45rem; border-radius:8px; display:block;  font-size:0.19rem;}
</style>
