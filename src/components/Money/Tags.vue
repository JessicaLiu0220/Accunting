<template>
  <div class="tags">
    <div class="current">
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected"><span>衣</span></div>
      <div :class="selected" class="add"><span>+</span></div>
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
@Component
export default class Tags extends Vue {}
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
      height: 80px;
      justify-content: center;
      > span {
        display: inline-block;
        height: 60px;
        width: 80px;
        background: $color-shadow;
        border-radius: 10px;
        text-align: center;
        line-height: 60px;

        &.selected {
          background: $color-highlight;
        }
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