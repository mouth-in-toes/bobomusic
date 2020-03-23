<template>
  <div class="uc-input">
    <input :type="type" :value="value" @input="$emit('input',$event.target.value)" @keyup.ctrl.enter="$emit('login')" :placeholder="placeholder"/>

  </div>
</template>

<script>
  export default {
    name:'Ipt',
    props:{
      value:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      },
      placeholder:{
        type:String,
        default:'在这里显示文字'
      }
    },
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
  .uc-input{ height:0.45rem; position:relative;display: flex;justify-content: center;margin: 0.25rem 0;}
  .uc-input input{ width:2.74rem;height:100%; font-size:0.17rem;background: #fff;padding: 23px;border:2px solid pink ;border-radius:5px}
</style>
