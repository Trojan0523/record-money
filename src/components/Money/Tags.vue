<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
                :class="{selected: selectedTags.indexOf(tag)>=0}">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';

  @Component
  export default class Tags extends Vue {
    tagList = store.fetchTags();
    selectedTags: string[] = [];

    create() {
      const name = window.prompt('请输入标签名');
      if (!name) {
        return window.alert('标签名不能为空');
      }
      store.createTag(name);
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }
  }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        display: flex;
        flex-direction: column-reverse;
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        overflow: scroll;
        overflow-x: hidden;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                line-height: $h;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 3px;
            }
        }
    }
</style>