<template>
  <div class="register">
    <a-form :form="form" >
      <a-form-item v-bind="formItemLayout" label="邮箱">
        <a-input
         class="input"
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '您的输入不符合邮箱的格式！',
                },
                {
                  required: true,
                  message: '请输入你的邮箱！',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          用户昵称&nbsp;
          <a-tooltip title="您想别人如何称呼您？">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input class="input"
          v-decorator="[
            'nickname',
            {
              rules: [
                {
                  required: true,
                  message: '请输入您的用户昵称',
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input class="input"
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="确认密码"
        has-feedback
      >
        <a-input class="input"
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: '请确认您的密码',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="电话号码">
        <a-input class="input"
          v-decorator="[
            'phone',
            {
              rules: [
                { required: true, message: '请输入您的电话号码' },
              ],
            },
          ]"
        >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '86' }]"
            style="width: 70px"
          >
            <a-select-option value="86"> +86 </a-select-option>
            <a-select-option value="87"> +87 </a-select-option>
          </a-select>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
          <router-link
          :to="{
            name: 'root',
          }"
        > 
        <a-button type="primary" @click="handleSubmit">注册 </a-button></router-link> 
         
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmDirty: false,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("yunxl");
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("ddd");
          this.$router.push("/");
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("两次密码不一致");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
};
</script>
<style scoped>
.register {
  margin: 10px auto;
  background-color: white;
}
.input {
  width: 50%;
}
</style>