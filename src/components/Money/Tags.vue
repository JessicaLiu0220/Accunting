<template>
  <div class="tags">
    <ul class="current">
      <li :class="selected">衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li>衣</li>
      <li class="add" @click="newTag">+</li>
    </ul>
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
  border: 1px solid red;
  //   margin: auto;
  > .current {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    border: 1px solid red;
    > li {
      background: $color-shadow;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      text-align: center;
      line-height: 60px;
      &.selected {
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