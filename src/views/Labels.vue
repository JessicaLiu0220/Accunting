<template>
  <Layout>
    <div class="labels">
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">
          <Icon name="add" />添加类别
        </button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import TagHelper from "@/mixins/TagHelper";
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
@Component
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
* {
  color: $color-deep;
}
.labels {
  flex-grow: 2;
  // border: 1px solid rgb(17, 10, 10);
  position: relative;
  > .tags {
    font-size: 16px;
    max-height: 600px;
    overflow: auto;
    > .tag {
      display: flex;
      padding: 10px 15px 10px 5px;
      border-bottom: 1px solid $color-shadow;
      justify-content: space-between;
      align-items: center;
      > span {
        height: 44px;
        min-width: 44px;
        background: $color-highlight;
        border-radius: 10px;
        text-align: center;
        line-height: 44px;
        padding: 0px 5px;
      }
      > .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
  > .createTag-wrapper {
    // position: absolute;
    // border: 1px solid blue;
    text-align: center;
    padding: 24px;
    > .createTag {
      // border: 1px solid red;
      font-size: 16px;
      background: $color-shadow;
      border: none;
      border: 0.5px solid #404040;
      border-radius: 5px;
      padding: 5px 16px;
    }
  }
}
</style>