<template>
<div class="info">
  <div class="link">
    <div class="left">
      <img src="../assets/github.png" alt="github主页" class="github">
      <a href="https://github.com/Hanasaki007" target="_blank" class="lefta">我的GitHub</a>
    </div>
    <img src="../assets/me.jpg" alt="我的头像" class="avatar">
    <div class="right">
      <a href="https://space.bilibili.com/392534081/dynamic" target="_blank" class="righta">我的bilibili</a>
      <img src="../assets/bilibili.png" alt="bilibili主页" class="bilibili">
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
  justify-content: center;
}
.avatar{
  width: 120px;
  height: 120px;
  border-radius: 100%;
  position: relative;
  margin: 0 20%;
}
.link{
  height: 100%;
  width: 50%;
  /* background-color: red; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left{
  /* background-color: blue; */
  height: 100%;
  display: flex;
  align-items: center;
}
.right{
  /* background-color: greenyellow; */
  height: 100%;
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
.lefta{
  display: inline-block;
  position: relative;
  left: 20px;
  text-decoration: none;
  color: blue;
  transition:0.5s 0s linear all;
}
a:hover{
  color: white;
}
.righta{
  display: inline-block;
  position: relative;
  right: 20px;
  text-decoration: none;
  color: blue;
  transition:0.5s 0s linear all;
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
  color: whitesmoke;
  /* background-color: aqua; */
}
.video{
  /* width: 700px;
  height: 465px; */
  width: 80%;
  height: 70%;
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
