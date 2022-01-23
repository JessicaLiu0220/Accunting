<template>
  <div>
    <div class="layout-wrapper">
      <div class="content" :class="`${classPrefix}-content`">
        <slot />
      </div>
      <Nav />
    </div>
  </div>
</template>

<script>
export default {
  props: ["classPrefix"],
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex-grow: 1; //尽量把所有的高度都给content
  overflow: auto;
}
</style>