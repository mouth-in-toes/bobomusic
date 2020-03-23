<template>
    <div class="header-contain">
        <div class="navcont">
            <img src="../assets/image/music.png" alt="" class="logo-item">
            <router-link to = '/home' active-class='nav-active' class='nav-title' >精选</router-link>
            <router-link to = '/music' active-class='nav-active' class='nav-title' >曲库</router-link>
            <router-link to = '/radio' active-class='nav-active' class='nav-title' >电台</router-link>
            <router-link to = '/user' active-class='nav-active' class='nav-title' >我的</router-link> 
            <img src="../assets/image/search.png" alt="" class="search-pic">
        </div>
        <div class="searchCont">
            <input class="searchIpt"/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-contain .navcont{
        background:#fff;
        height: 0.42rem;
        display: flex;
        justify-content: space-around;
        align-items: center;   
    }
    .header-contain .navcont .logo-item{
        width: 0.25rem;
        height: 0.3rem;
    }
    .header-contain .navcont .nav-active{
           font-size: 0.18rem;
        color: #000;
        color:#ff2d55
    }
     .nav-title{
        font-size: 0.18rem;
        color: #000;
    }
    .header-contain .navcont .search-pic{
        width: 0.25rem;
        height: 0.3rem;
    }
    .header-contain .searchCont{
        height: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-contain .searchCont .searchIpt{
        width: 3.3rem;
        height: 80%;
        background: #eee;
        padding: 10px;
     
        border-radius: 5px;
    }
 
</style>