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
  /* background-color: rgba(0, 0, 0, 0.1); */
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
  right: 3px;
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
  color: #4fc3f7;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.lefta:hover{
  color: white;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.righta{
  display: inline-block;
  position: relative;
  right: 20px;
  text-decoration: none;
  color: #f44336;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.righta:hover{
  color: white;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.video-area{
  width: 100%;
  height: calc(100% - 150px - 15px); /* 调整高度计算方式，减去额外的20px用于底部间距 */
  /* background-color: blue; */
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.video-title{
  text-align: center;
  margin: 0;
  color: whitesmoke;
  /* background-color: aqua; */
}
.video{
  width: 90%;
  height: calc(100% - 40px - 15px); /* 调整高度计算方式，保留底部空间 */
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
}
iframe{
  width: 100%;
  height: 100%;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .info {
    height: 150px;
  }

  .avatar {
    width: 80px;
    height: 80px;
    margin: 0 10%;
    position: relative;
    left: 1px;
  }

  .github, .bilibili {
    width: 30px;
    height: 30px;
  }

  .lefta{
    padding: 6px 12px;
    font-size: 14px;
    left: 10px;
    /* right: 10px; */
  }

  .righta {
    padding: 6px 12px;
    font-size: 14px;
    /* left: 10px; */
    right: 10px;
  }

  .video-area {
    height: calc(100% - 120px - 25px);
  }

  .video-title {
    font-size: 16px;
  }

  .video {
    width: 95%;
    height: calc(100% - 30px - 25px);
    margin: 10px auto;
  }
}

@media screen and (max-width: 480px) {
  .info {
    height: 120px;
    flex-direction: column;
  }

  .link {
    width: 100%;
    justify-content: space-around;
  }

  .left, .right {
    width: 40%;
    justify-content: center;
  }

  .avatar {
    width: 60px;
    height: 60px;
    margin: 0;
    position: relative;
    left: 1px;
  }

  .lefta, .righta {
    font-size: 12px;
    padding: 4px 8px;
  }

  .github, .bilibili {
    width: 25px;
    height: 25px;
  }

  .video-title {
    font-size: 14px;
  }
}
</style>
