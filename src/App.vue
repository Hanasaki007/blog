<template>
  <div class="container">
    <!-- banner部分 -->
    <div class="banner">
      <RouterLink :to="{name:'home'}" class="btn1" active-class="active-btn">
        <button>首页</button>
      </RouterLink>
      <RouterLink :to="{name:'more'}" class="btn2" active-class="active-btn">
        <button>更多</button>
      </RouterLink>
    </div>
    <!-- title部分 -->
    <div class="title">
      <h1>花心愛的个人空间</h1>
    </div>
    <!-- RouterView部分 -->
     <div class="view">
      <RouterView></RouterView>
     </div>

  </div>
</template>

<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
import { onMounted } from 'vue';

// 检测是否为移动设备
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

// 在组件挂载时检测设备类型
onMounted(() => {
  if (isMobile()) {
    alert('建议使用电脑打开以获得更好的浏览体验');
  }
});

</script>

<style>
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
  /* background-image: url('./assets/background.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden; /* 添加此行以隐藏滚动条 */
}
.container{
  margin: 0 auto;
  width: 90vw;
  height: 100vh;
  background: rgba(0, 0, 0,0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column; /* 添加此行以使用flex布局 */
}
.banner{
  width: 100%;
  height: 50px;
  /* background-color: rgba(0, 0, 0, 0.05); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* 防止在flex布局中收缩 */
}
.title{
  height: 50px;
  flex-shrink: 0; /* 防止在flex布局中收缩 */
}
h1{
  text-align: center;
  /* background-color: blue; */
  margin: 0;
  color: whitesmoke;
}
.view{
  flex: 1; /* 修改为flex: 1以自动填充剩余空间 */
  width: 100%;
  margin-top: 20px;
  /* background-color: skyblue; */
  overflow: hidden;
  border-radius: 15px;
}
.btn1,.btn2{
  height: 50px;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
button{
  margin: 0 20px;
  height: 40px;
  width: 80px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.15);
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
/* 激活路由按钮样式 */
.active-btn button {
  background: linear-gradient(45deg, #FF1361, #FF8C00);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 19, 97, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
button:hover{
  background-color: rgba(255,255,255,0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
.active-btn button:hover {
  background: linear-gradient(45deg, #ff2a70, #ff9800);
  box-shadow: 0 6px 20px rgba(255, 19, 97, 0.6);
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .container {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  .banner {
    height: 60px;
  }

  button {
    margin: 0 10px;
    height: 40px;
    width: 70px;
    font-size: 14px;
  }

  .title h1 {
    font-size: 20px;
    height: 40px;
    line-height: 40px;
  }

  .view {
    margin-top: 10px;
    border-radius: 0;
  }
}

@media screen and (max-width: 480px) {
  button {
    margin: 0 5px;
    height: 35px;
    width: 60px;
    font-size: 12px;
  }

  .title h1 {
    font-size: 18px;
  }
}
</style>
