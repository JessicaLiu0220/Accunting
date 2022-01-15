<template>
  <div class="numberPad">
    <div class="output">0</div>
    <div class="buttons clearfix">
      <button @click="outputNumber">1</button>
      <button @click="outputNumber">2</button>
      <button @click="outputNumber">3</button>
      <button @click="remove"><Icon name="remove" /></button>
      <button @click="outputNumber">4</button>
      <button @click="outputNumber">5</button>
      <button @click="outputNumber">6</button>
      <button @click="clear">清除</button>
      <button @click="outputNumber">7</button>
      <button @click="outputNumber">8</button>
      <button @click="outputNumber">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="outputNumber">.</button>
      <button @click="outputNumber" class="zero">0</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearfix;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 0px 16px;
    text-align: right;
    background: $color-shadow;
    border-top: 2px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  .buttons {
    @extend %clearfix;
    > button {
      width: 25%;
      height: 60px;
      float: left;
      border: 0.5px solid #e0e0e0;

      background: $color-shadow;
      &.ok {
        height: 120px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>