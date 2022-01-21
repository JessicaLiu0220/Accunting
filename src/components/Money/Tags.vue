<template>
  <div class="tags">
    <div class="current">
      <div
        v-for="tag in tagList"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        <span>{{ tag.name }}</span>
      </div>
      <div class="add" @click="create"><span>+</span></div>
    </div>
    <!-- <div class="new">
        <button>添加标签</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import store from "@/store/index2";
@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  create() {
    const name = window.prompt("请输入标签名");
    //点击取消也不会新增标签
    if (!name) {
      return;
    }
    store.createTag(name);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 2;
  // border: 1px solid red;
  margin: auto;
  margin-top: 20px;
  width: 90%;
  > .current {
    display: flex;
    flex-wrap: wrap;
    // border: 1px solid green;

    > div {
      display: flex;
      // border: 1px solid red;
      width: 25%;
      height: 50px;
      margin-bottom: 20px;
      justify-content: center;
      > span {
        display: inline-block;
        height: 50px;
        width: 70px;
        background: $color-shadow;
        border-radius: 10px;
        text-align: center;
        line-height: 50px;
      }
      &.selected > span {
        background: $color-highlight;
      }
    }
    > .add {
      font-size: 24px;
    }
  }
  // > .new {
  //   padding: 16px 0px;
  //   padding-left: 16px;
  //   > button {
  //     background-color: transparent;
  //     border: none;
  //     color: #999999;
  //     border-bottom: 1px solid;
  //   }
  // }
}
</style>