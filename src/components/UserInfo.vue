<template>
  <div class="userInfomation">
    <section>
      <img :src="userinfo.avatar_url" alt="" />
      <span>{{ userinfo.loginname }}</span>

      <!-- <p>积分：{{ userinfo.score }}</p>
      <p>注册时间{{ userinfo.create_at | formatDate }}</p> -->
    </section>
    <div class="replies">
      <p>最近参与的回复</p>
      <ul>
        <li v-for="user in userinfo.recent_replies" v-bind:key="user">
          <img :src="userinfo.avatar_url" alt="" />
          <span>{{ userinfo.loginname }}</span>
          <router-link
            :to="{
              name: 'post_content',
              params: { id: user.id, name: user.author.loginname },
            }"
          >
            <span class="title">
              {{ user.title }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="topics">
      <p>最近参与的题目</p>
      <ul>
        <li v-for="user in userinfo.recent_topics" v-bind:key="user">
          <router-link
            :to="{ name: 'user', params: { name: user.author.loginname } }"
          >
            <img :src="user.author.avatar_url" alt="" />
          </router-link>
          <router-link
            :to="{ name: 'user', params: { name: user.author.loginname } }"
          >
            <span>{{ user.author.loginname }}</span>
          </router-link>
          <router-link
            :to="{
              name: 'post_content',
              params: { id: user.id, name: user.author.loginname },
            }"
          >
            <span class="title">
              {{ user.title }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      userinfo: {},
    };
  },
  methods: {
    getUserData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          if (res.data.success == true) {
            this.userinfo = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.getUserData();
  },
};
</script>
<style scoped>
.userInfomation {
  width: 75%;
  margin: 10px auto;
  background-color: white;
}
.userInfomation section {
  padding: 12px;
}
.userInfomation img {
  width: 30px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>
