<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="" />
    <ul>
      <li>
        <router-link
          :to="{
            name: 'root',
          }"
          >首页
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'guide',
          }"
          >新手入门
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'api',
          }"
          >API
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'about',
          }"
          >关于
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'login',
          }"
        >
          注册/登录
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  background: #444;
  height: 50px;
}
img {
  width: 120px;
  height: 50px;
}
ul {
  list-style-type: none;
  float: right;
  margin: 15px 50px;
}
li {
  display: inline-block;
  margin: 0 15px;
  font-size: 14px;
  color: #777;
}
a {
  color: #ccc;
  text-decoration: none;
}
</style>
