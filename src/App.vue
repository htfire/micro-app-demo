<template>
  <div class="app">
    <div class="wrapper">
      <h1>主应用vue3+vite</h1>
      <div>
        <button @click="handleClick">重新加载子应用</button>
      </div>
    </div>
    <div class="child-app">
      <micro-app-platform name='child-project' url='http://localhost:3000/' iframe></micro-app-platform>
    </div>
</div>

</template>

<script setup>
import microApp from '@micro-zoe/micro-app'

const handleClick = () => {
  console.log('重新加载子应用')
  microApp.reload('child-project', true).then((result) => {
  if (result) {
    console.log('重新渲染成功')
  } else {
    console.log('重新渲染失败')
  }
})
}
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: flex-end;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: left;
  }
}

.child-app {
  width: 50vw;
  height: 50vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
