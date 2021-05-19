<template>
  <div class="autherinfo">
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <img :src="user.avatar_url" alt="" />
      <router-link :to="{ name: 'user', params: { name: user.loginname } }">
        <span class="loginname">{{ user.loginname }}</span>
      </router-link>
    </div>
    <div class="recent_replies">
      <div class="topbar">参与回复</div>
      <ul>
        <li v-for="list in replylimitby5" v-bind:key="list">
          <router-link
            :to="{
              name: 'post_content',
              params: { id: list.id, name: list.author.loginname },
            }"
          >
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者其他话题</div>
      <ul>
        <li v-for="list in topcilimitby5" v-bind:key="list">
          <router-link
            :to="{
              name: 'post_content',
              params: { id: list.id, name: list.author.loginname },
            }"
          >
            {{ list.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SildeBar",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getSildeBarData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          if (res.data.success == true) {
            this.user = res.data.data;
            console.log("side");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    topcilimitby5() {
      if (this.user.recent_topics) {
        return this.user.recent_topics.slice(0, 5);
      } else {
        return [];
      }
    },
    replylimitby5() {
      if (this.user.recent_replies) {
        return this.user.recent_replies.slice(0, 5);
      } else {
        return [];
      }
    },
  },
  beforeMount() {
    this.getSildeBarData();
  },
  watch: {
    $route(to, from) {
      this.getSildeBarData();
    },
  },
};
</script>

<style scoped>
.authersummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.autherinfo {
  width: 328px;
  float: right;
  margin-top: 0;
  background-color: white;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
</style>
