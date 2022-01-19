<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输出标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签名重复了");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
  > span {
    height: 44px;
    min-width: 44px;
    background: $color-highlight;
    border-radius: 10px;
    text-align: center;
    line-height: 44px;
    padding: 0px 5px;
  }
}
.createTag {
  font-size: 16px;
  background: $color-shadow;
  border: none;
  border: 0.5px solid #404040;
  border-radius: 5px;
  padding: 5px 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>