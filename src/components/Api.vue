<template>
  <div class="api">
    <div class="toobar">
      <router-link
        :to="{
          name: 'root',
        }"
      >
        <span>主页</span>
      </router-link>
      /API
    </div>
    <div class="content">
      <h1>
        <strong>主题</strong>
        <hr />
      </h1>
      <p class="show">
        <strong
          >get /topics 主题首页
          <hr
        /></strong>
      </p>
      <p>接收 get 参数</p>
      <p>
          <ul>
              <li>page Number 页数</li>
              <li>tab String 主题分类。目前有 ask share job good</li>
              <li>limit Number 每一页的主题数量</li>
              <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
          </ul>
      </p>
      <p class="show">
        <strong
          >get /topic/:id 主题详情
          <hr
        /></strong>
      </p>
      <p>接收 get 参数</p>
      <p>
          <ul>
              <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
              <li>accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
            </ul>
      </p>
      <h1>
        <strong>主题收藏</strong>
        <hr />
      </h1>
      <p class="show">
        <strong
          >post /topic_collect/collect 收藏主题
          <hr
        /></strong>
      </p>
      <p>接收 post 参数</p>
      <p>
          <ul>
              <li>accesstoken String 用户的 accessToken</li>
              <li>topic_id String 主题的id</li>
        </ul>
      </p>
      <p class="show">
        <strong
          >post /topic_collect/de_collect 取消主题
          <hr
        /></strong>
      </p>
      <p>接收 post 参数</p>
      <p>
          <ul>
              <li>accesstoken String 用户的 accessToken</li>
              <li>topic_id String 主题的id</li>
            </ul>
      </p>
      <h1>
        <strong>评论</strong>
        <hr />
      </h1>
      <p class="show">
        <strong
          >post /topic/:topic_id/replies 新建评论
          <hr
        /></strong>
      </p>
      <p>接收 post 参数</p>
      <p>
          <ul>
              <li>accesstoken String 用户的 accessToken</li>
              <li>content String 评论的主体</li>
              <li>reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
        </ul>
      </p>
      <p class="show">
        <strong
          >post /reply/:reply_id/ups 为评论点赞
          <hr
        /></strong>
      </p>
      <p>接收 post 参数</p>
      <p>
          <ul>
              <li>accesstoken String</li>
            </ul>
      </p>
      <p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Api",
};
</script>
<style scoped>
.api {
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
}
.show {
  font-size: 18px;
}
a:hover {
  text-decoration: underline;
}
</style>