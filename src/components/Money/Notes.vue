<template>
    <div>
        <label class="notes">
            {{value}}
            <span class="name">备注</span>
            <input type="text" :value="value" @input="onInput" placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
    onInput(event: KeyboardEvent) {
      const input = event.target as HTMLButtonElement;
      this.value = input.value;
    }
  }
</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            line-height: 64px;
            flex-grow: 1;
            border: none;
            background: transparent;
            border-bottom: 1px solid #eeeeee;
            padding-right: 16px;
        }
    }
</style>