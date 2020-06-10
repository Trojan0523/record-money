<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="notes">
            <FromItem placeholder="在这里输入备注" field-name="备注" @update:value="onUpdateNotes"/>
        </div>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FromItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import oldStore from '@/store/index2';

  @Component({
    components: {Tags, FromItem, Types, NumberPad},
  })
  export default class Money extends Vue {
    recordList = oldStore.recordList;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      oldStore.createRecord(this.record);
    }
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>
