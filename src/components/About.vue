<template>
  <div class="about">
    <div class="toobar">
      <router-link
        :to="{
          name: 'root',
        }"
      >
        <span>主页</span>
      </router-link>
      /关于
    </div>
    <div class="content">
      这是一个使用Vue.js技术栈搭建的仿Cnode社区的项目。
      <br />
      项目模块组件：
      <ul>
        <li>Header模块</li>
        <li>PostList模块</li>
        <li>Pagination分页组件的开发</li>
        <li>Article模块</li>
        <li>Slider侧边栏模块</li>
        <li>UserInfo用户个人中心模块</li>
        <li>Guide新手入门模块</li>
        <li>Api模块</li>
        <li>About模块</li>
        <li>Login登录模块</li>
        <li>Register注册模块</li>
      </ul>
      本项目采用了如下技术栈：
      <ul>
        <li>vue.js计算属性</li>
        <li>vue.js的内置指令和事件的绑定</li>
        <li>vue.js的自定义事件和触发</li>
        <li>vue-router路由的跳转和监听</li>
        <li>父子组件之间的数据传递</li>
      </ul>

      感谢您的预览！
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>

<style scoped>
.about {
  background-color: #e1e1e1;
  max-width: 1344px;
  margin: 0 auto;
}
.toobar {
  height: 40px;
  background-color: #f5f5f5;
  color: #778087;
}
.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}
.content {
  background-color: white;
  padding: 20px;
  color: black;
  font-size: 20px;
  min-height: 87vh;
}
</style>