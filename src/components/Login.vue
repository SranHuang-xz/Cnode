<template>
  <div class="login">
    <div class="toobar">
      <router-link
        :to="{
          name: 'root',
        }"
      >
        <span>主页</span>
      </router-link>
      /登录
    </div>
    <a-form :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [{ required: true, message: '请输入你的用户名！' }],
            },
          ]"
          placeholder="用户名"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '密码不可为空' }],
            },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>

      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>

      <div class="register">
        或者
        <router-link
          :to="{
            name: 'register',
          }"
        >
          注册
        </router-link>
      </div>
    </a-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          alert("登录成功");
          this.$router.push("/");
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
<style scoped>
.login {
  margin: 10px auto;
  height: 400px;
  background-color: white;
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
.login-form {
  max-width: 400px;
  margin: 20px auto;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
  margin: auto;
}
.register {
  margin-top: 10px;
}
</style>
