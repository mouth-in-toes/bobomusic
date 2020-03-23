<template>
    <div class="titlecont">
        <h2>{{title}}</h2>
        <p class="more">更多</p>
    </div>
</template>
<script>
export default {
    props:['title']
}
</script>
<style scoped>
    .titlecont{
        display: flex;
        height: 0.3rem;
        justify-content: space-between;
        align-items: center;
        background: #fff;

        padding:0.1rem 0.16rem 0
    }
    .titlecont h2{
        font-size: 0.2rem;
        font-weight: normal;
        font-family: '苹方';
    }
    .titlecont .more{
        font-size: 0.12rem;
        border:1px solid #000;
        padding: 0.02rem 0.06rem;
        border-radius:5px
    }
    
</style>