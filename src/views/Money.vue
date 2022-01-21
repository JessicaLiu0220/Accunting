<template>
  <Layout class-prefix="layout">
    <Types :value.sync="record.type" />
    {{ record }}
    <Tags />
    <Notes
      @update:value="onUpdateNotes"
      fieldName="备注："
      placeholder="请输入需要备注的内容"
    />
    <Number-pad @update:value="onUpdateAmount" @submit="saveRecord" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import model from "@/model";
import store from "@/store/index2";
import { Component } from "vue-property-decorator";
//获取数据

//声明数据类型

@Component({
  components: { NumberPad, Types, Tags, Notes },
})
export default class Money extends Vue {
  //将收集的所有数据放到record中
  record: RecordItem = { type: "-", tags: [], notes: "", amount: 0 };
  //存储每次提交的record
  recordList = store.recordList;

  //获取notes中输入的内容
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  //获取numberpad中输入的内容
  onUpdateAmount(value: string) {
    this.record.amount = parseInt(value);
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>