<template>
<div class="info">
  <img src="../assets/me.jpg" alt="我的头像" class="avatar">
  <div class="right">
    <div class="right-left">
      <img src="../assets/github.png" alt="github主页" class="github">
      <a href="https://github.com/Hanasaki007" target="_blank">我的GitHub</a>
    </div>
    <div class="right-right">
      <img src="../assets/bilibili.png" alt="bilibili主页" class="bilibili">
      <a href="https://space.bilibili.com/392534081/dynamic" target="_blank">我的bilibili</a>
    </div>
  </div>
</div>
<div class="video-area">
  <h3 class="video-title">最新视频</h3>
  <div class="video">
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114676398628821&bvid=BV1NYMBz9ERs&cid=30478241609&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.info{
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
  align-items: center;
}
.avatar{
  width: 120px;
  height: 120px;
  border-radius: 100%;
  position: relative;
  left: 25%;
}
.right{
  height: 100%;
  width: 400px;
  /* background-color: red; */
  position: relative;
  left: 28%;
  display: flex;
}
.right-left{
  /* background-color: blue; */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.right-right{
  /* background-color: greenyellow; */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.github{
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.bilibili{
  width: 40px;
  height: 40px;
}
a{
  display: inline-block;
  position: relative;
  left: 20px;
  text-decoration: none;
  color: blue;
  transition:0.5s 0s linear all;
}
a:hover{
  color: black;
}
.video-area{
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  background-color: rgba(0, 0, 0, 0.1);
}
.video-title{
  text-align: center;
  margin: 0;
  /* background-color: aqua; */
}
.video{
  width: 700px;
  height: 465px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
}
iframe{
  width: 100%;
  height: 100%;
}
</style>
