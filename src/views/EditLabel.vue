<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack" />
      <span class="title">编辑类别</span>
      <span class="rightIcon"></span>
    </div>
    <Notes
      :value="currentTag.name"
      @update:value="update"
      field-name="标签名"
      placeholder="请输入标签名"
    />
    <div class="createTag-wrapper">
      <button class="createTag" @click="remove">删除</button>
      <button class="saveTag" @click="goBack">保存</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Notes },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.currentTag) {
      this.$store.commit("updateTag", {
        id: this.currentTag.id,
        name,
      });
    }
  }
  remove() {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  // border: 1px solid red;
  background: $color-highlight;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .leftIcon {
    color: $color-deep;
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.createTag-wrapper {
  text-align: center;
  padding-top: 20px;

  margin: 0 auto;
  > .createTag {
    margin-right: 60px;
    font-size: 16px;
    background: $color-shadow;
    border: none;
    border: 0.5px solid #404040;
    border-radius: 5px;
    padding: 5px 16px;
  }
  > .saveTag {
    font-size: 16px;
    background: $color-shadow;
    border: none;
    border: 0.5px solid #404040;
    border-radius: 5px;
    padding: 5px 16px;
  }
}
</style>