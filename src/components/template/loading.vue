<template>
    <div class="loading">
        <van-loading color="white" />
    </div>
</template>
<script>
  export default {
    name: ''
  }
</script>
<style type="text/scss" scoped>
    .loading{
        width: 3rem;
        height: 3rem;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        left: 0;
        top:0;
        right:0;
        bottom: 0;
        z-index: 999;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
</style>
