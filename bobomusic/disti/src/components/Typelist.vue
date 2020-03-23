<template>
    <div class="typelist" >
        <dl v-for = '(items) in data' :key='items.id' @click="wait">
            <dt><img :src="items.images" alt=""></dt>
            <dd>{{items.dec}} </dd>
        </dl>
    
    </div>
</template>

<script>
export default {
    props:['data'],
    mounted(){
     
    },
    methods:{
         wait(){
              this.$router.replace('/Soon')
        }
    }
      
}
</script>
<style scoped>
    .typelist{
        background:#fff;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        padding: 0 0.12rem;
        margin:0.08rem 0  0.24rem;
    }
    .typelist dl{
        margin: 0.08rem  0.03rem 0;
        width: 1.02rem;
        height: 1.02rem;
      
    }
    .typelist dl dt{
        height: 1rem;
        width: 100%;
    }
    .typelist dl dt img{
        width: 100%;
        height: 100%;
    }
    .typelist dl dd {
        height: 0.32rem;
        display: flex;
        justify-content: center;
        font-size: 0.14rem;
        background: #fff;
        
        width: 100%;
       align-items: center;
    }
</style>