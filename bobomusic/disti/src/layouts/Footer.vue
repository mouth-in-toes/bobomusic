<template>
    <div class="footer-contain">
        <div class="music-title">
            <img src="/data/images/footer_music.png" alt="" class="ftpic">
            <div class="Mtitle">
                <p>歌曲名</p>
                <i>横划可以切换上下首（个屁）</i>
            </div>
        </div>
        <div class="footer-control">
              <img src="../assets/image/play_cn.png" alt="" class="playcon">
              <img src="../assets/image/list_btn.png" alt="" class="ftlist">
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>
<style scoped>
 .footer-contain{
     padding:0 0.15rem;
        background:#fff;
        height: 0.42rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
.footer-contain .ftpic{
    height: 0.41rem;
    width: 0.41rem;

}
.footer-contain .music-title{
    display: flex;
}
.footer-contain .music-title .Mtitle {
    margin-left: 0.08rem;
}
.footer-contain .music-title .Mtitle p{
    font-size: 0.15rem;
    font-weight: 900;
}
.footer-contain .music-title .Mtitle i{
    font-size: 0.12rem;
    color: #c1b9b9;
}
.footer-contain .footer-control{
    height: 100%;
    width: 0.66rem;
 
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer-contain .footer-control img{
    width: 0.3rem;
    height: 0.3rem;
   
}
</style>