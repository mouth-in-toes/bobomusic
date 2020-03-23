<template>
      <div class="ban_list">
            <router-link tag='dl' to='Soon' v-for=" items in navlist" :key='items.id'  >
                <dt><img :src="items.images" alt=""></dt>
                <dd>{{items.title}}</dd>
            </router-link>
        </div>
</template>
<script>

export default {
    name:'Bannav',
    props:['navlist']
}
</script>
<style scoped>
.ban_list{
      height: 1rem;
      display: flex;
      width: 100%;
      background:#fff;
      border-bottom: 1px solid #999;
      justify-content: space-around;
  }
  .ban_list dl{
      display: flex;
      background: #fff;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex:1
  }
  .ban_list dl dt img{
      width: 0.45rem;
      height: 0.45rem;
  }
  .ban_list dl dd{
      margin-top: 0.03rem;
      font-size: 0.13rem;
  }
</style>