<template>
    <div class="songList" >
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
    .songList{
        background:#fff;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        padding: 0 0.12rem;
        margin-bottom: 0.08rem;
    }
    .songList dl{
        margin-top: 0.1rem;
        width: 0.84rem;
        height: 1.1rem;
      
    }
    .songList dl dt{
        height: 0.81rem;
        width: 100%;
    }
    .songList dl dt img{
        width: 100%;
        height: 100%;
    }
    .songList dl dd {
        height: 0.32rem;
        display: flex;
        font-size: 0.08rem;
        background: #fff;
        
        width: 100%;
       align-items: center;
    }
</style>