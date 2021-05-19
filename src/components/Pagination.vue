<template>
  <div class="pagination">
    <button @click="change(1)">首页</button>
    <button @click="change(currentPage == 1 ? 1 : currentPage - 1)">
      上一页
    </button>
    <button
      v-for="btn in btns"
      v-bind:key="btn"
      :class="[
        {
          pagebtn: btn != currentPage,
          currentPage: btn == currentPage,
        },
      ]"
      @click="change(btn)"
    >
      {{ btn }}
    </button>
    <button @click="change(currentPage + 1)">下一页</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      btns: [1, 2, 3, 4, 5],
      currentPage: 1,
    };
  },
  methods: {
    change(btn) {
      if (btn == this.btns[this.btns.length - 1]) {
        this.btns.shift();
        this.btns.splice(this.btns.length, 0, btn + 1);
      } else if (btn == this.btns[0] && btn > 1) {
        this.btns.unshift(btn - 1);
        this.btns.splice(this.btns.length - 1, 1);
      } else if (btn == 1) {
        this.btns = [1, 2, 3, 4, 5];
      }
      this.currentPage = btn;

      this.$emit("transPage", this.currentPage);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>
