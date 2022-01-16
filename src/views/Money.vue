<template>
  <Layout class-prefix="layout">
    <Types />
    <Tags :dataSource.sync="tags" />
    <Notes />
    <Number-pad />
  </Layout>
</template>

<script lang="js">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component } from "vue-property-decorator";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
@Component({
  components: { NumberPad, Types, Tags, Notes },
})
export default class Money extends Vue {
  data(){
    return{
  tags:['衣','食','住','行',]
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>