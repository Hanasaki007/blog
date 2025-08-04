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

</script>

<style>
body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.container{
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
}
.banner{
  width: 100%;
  height: 50px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.title{
  height: 50px;
}
h1{
  text-align: center;
  /* background-color: blue; */
  margin: 0;
  color: black;
}
.view{
  height: 650px;
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
  width: 60px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.2);
  font-size: 14px;
  transition:0.5s 0s linear all;
}
/* 激活路由按钮样式 */
.active-btn button {
  background-color: rgba(0,0,0,0.5) !important;
  color: white;
}
button:hover{
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
}
</style>
