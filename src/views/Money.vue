<template>
  <Layout class-prefix="layout">
    <Types :value.sync="record.type" />
    {{ record }}
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
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
import { Component, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
//获取数据
const recordList = model.fetch();
const tagList = tagListModel.fetch();
//声明数据类型

@Component({
  components: { NumberPad, Types, Tags, Notes },
})
export default class Money extends Vue {
  //将收集的所有数据放到record中
  record: RecordItem = { type: "-", tags: [], notes: "", amount: 0 };
  //存储每次提交的record
  recordList: RecordItem[] = recordList;

  tags = tagList;
  //获取tags中选中的标签，将获取的最新值传到record中
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  //获取notes中输入的内容
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  //获取numberpad中输入的内容
  onUpdateAmount(value: string) {
    this.record.amount = parseInt(value);
  }
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>