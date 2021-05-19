<template>
  <div class="guide">
    <div class="toobar">
      <router-link
        :to="{
          name: 'root',
        }"
      >
        <span>主页</span>
      </router-link>
      /Node.js新手入门
    </div>
    <div class="content">
      <h1>
        <strong>Node.js入门</strong>
        <hr />
      </h1>
      <p class="show"><strong>《汇智网 Node.js 课程》</strong></p>
      <p class="show">
        <a href="http://www.hubwiz.com/course/?type=nodes" target="_bank"
          >http://www.hubwiz.com/course/?type=nodes</a
        >
      </p>
      <p class="show">
        <strong>《快速搭建 Node.js 开发环境以及加速 npm》</strong>
      </p>
      <p class="show">
        <a
          href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"
          target="_bank"
          >http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a
        >
      </p>
      <p class="show"><strong>《Node.js 包教不包会》</strong></p>
      <p class="show">
        <a href="https://github.com/alsotang/node-lessons" target="_bank"
          >https://github.com/alsotang/node-lessons</a
        >
      </p>
      <h1>
        <strong>Node.js资源</strong>
        <hr />
      </h1>
      <p class="show"><strong>《node weekly》</strong></p>
      <p class="show">
        <a href="http://nodeweekly.com/issues" target="_bank"
          >http://nodeweekly.com/issues</a
        >
      </p>
      <p class="show">
        <strong>《node123-node.js中文资料导航》</strong>
      </p>
      <p class="show">
        <a href="https://github.com/youyudehexie/node123" target="_bank"
          >https://github.com/youyudehexie/node123</a
        >
      </p>
      <p class="show">
        <strong
          >《A curated list of delightful Node.js packages and
          resources》</strong
        >
      </p>
      <p class="show">
        <a href="https://github.com/sindresorhus/awesome-nodejs" target="_bank"
          >https://github.com/sindresorhus/awesome-nodejs</a
        >
      </p>
      <h1>
        <strong>Node.js名人</strong>
        <hr />
      </h1>
      <p class="show"><strong>《名人堂》</strong></p>
      <p class="show">
        <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂" target="_bank"
          >https://github.com/cnodejs/nodeclub/wiki/名人堂</a
        >
      </p>
      <h1>
        <strong>Node.js 服务器</strong>
        <hr />
      </h1>
      <p class="show">
        <strong>新手搭建 Node.js 服务器，推荐使用无需备案</strong>
      </p>
      <p class="show">
        <a href="https://www.digitalocean.com/" target="_bank"
          >https://www.digitalocean.com/</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Newer",
  data() {
    return {};
  },
};
</script>
<style scoped>
.guide {
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
  /* border: 1px red solid; */
  background-color: white;
  padding: 20px;
}
.show {
  font-size: 18px;
  color: black;
}
a:hover {
  text-decoration: underline;
}
</style>