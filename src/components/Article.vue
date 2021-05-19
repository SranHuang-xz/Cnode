<template>
  <div class="article">
    <div class="topic_header">
      <div class="topic_title">
        {{ post.title }}
      </div>
      <ul>
        <li>·发布于{{ post.create_at | formatDate }}</li>
        <li>·作者{{ post.author.loginname }}</li>
        <li>·{{ post.visit_count }}</li>
        <li>·最后一次编辑是{{ post.last_reply_at | formatDate }}</li>
        <li>·来自 {{ post | tabFormatter }}</li>
      </ul>
    </div>
    <div v-html="post.content" class="topic_content"></div>

    <div class="topbar">回复</div>

    <div id="reply">
      <div
        v-for="(reply, index) in post.replies"
        v-bind:key="index"
        class="replySec"
      >
        <div class="replyUp">
          <router-link
            :to="{
              name: 'user',
              params: {
                name: reply.author.loginname,
              },
            }"
          >
            <img :src="reply.author.avatar_url" alt="" />
          </router-link>
          <router-link
            :to="{
              name: 'user',
              params: {
                name: reply.author.loginname,
              },
            }"
          >
            <span>{{ reply.author.loginname }}</span>
          </router-link>
          <span> {{ index + 1 }}楼 </span>
          <span v-if="reply.ups.length > 0"> ☝ {{ reply.ups.length }} </span>
          <span v-else> </span>
        </div>
        <div class="replyContent">
          <span v-html="reply.content"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getArticleData() {
      let self = this;
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.success == true) {
            self.post = res.data.data;
            console.log("this");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getArticleData();
  },
  watch: {
    $route(to, from) {
      this.getArticleData();
    },
  },
};
</script>
<style>
@import url("../assets/markdown-github.css");
.article {
  margin: 0 auto;
  background-color: white;
}
.topbar {
  background-color: #f6f6f6;
  padding: 10px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 10px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}

.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.replyContent {
  margin-left: 30px;
}
.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
  max-width: 100%;
}
img {
  max-width: 100%;
}
.markdown-text img {
  width: 92% !important;
}
</style>
