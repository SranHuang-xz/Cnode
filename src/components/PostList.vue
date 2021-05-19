<template>
  <div class="postList">
    <div class="post">
      <ul>
        <li>
          <div class="toobar">
            <span @click="toobarActive('all')">全部</span>
            <span @click="toobarActive('good')">精华</span>
            <span @click="toobarActive('share')">分享</span>
            <span @click="toobarActive('ask')">问答</span>
            <span @click="toobarActive('job')">招聘</span>
          </div>
        </li>
        <li v-for="post in posts" >
          <img :src="post.author.avatar_url" alt="" />
            <span class="reply">{{ post.visit_count }}</span>
            /{{ post.reply_count }}
          </span>
          <!-- 分类 -->
          <span
            :class="[
              {
                put_good: post.good == true,
                put_top: post.top == true,
                'topiclist-tab': post.good != true && post.top != true,
              },
            ]"
          >
            <span>
              {{ post | tabFormatter }}
            </span>
          </span>
          <router-link
            :to="{
              name: 'post_content',
              params: { id: post.id, name: post.author.loginname },
            }"
          >
            <span class="title">
              {{ post.title }}
            </span>
          </router-link>

          <span class="time">
            <span>
              {{ post.last_reply_at | formatDate }}
            </span></span
          >
        </li>
        <li><pagination @transPage="changePage"></pagination></li>
      </ul>
    </div>
  </div>
</template>
<script>
import pagination from "../components/Pagination";
export default {
  name: "PostList",
  props: {
    msg: String,
  },
  data() {
    return {
      posts: [],
      postpage: 1,
      active: "share",
    };
  },
  components: {
    pagination: pagination,
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20,
            tab: this.active,
          },
        })
        .then((res) => {
          this.posts = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePage(value) {
      this.postpage = value;
      this.getData();
    },
    toobarActive(value) {
      this.active = value;
      this.getData();
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 30px;
  height: 30px;
}
.postList {
  background-color: white;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.time {
  text-align: right;
  min-width: 50px;
  display: block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}
</style>
