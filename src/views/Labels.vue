<template>
    <Layout>
        <ol class="tags">
            <li v-for="tag in tags" :key="tag.id">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </li>
        </ol>
        <div class="createTag-Wrapper">
            <button class="createTag" @click="createtag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createtag() {
      const name = window.prompt('请输入标签');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复');
        } else if (message === 'success') {
          window.alert('添加成功');
        }


      }
    }
  }
</script>
<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > li {
            border-bottom: 1px #e6e6e6 solid;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg {
                width: 18px;
                height: 18px;
                color: #666;
                margin-right: 16px;
            }
        }
    }

    .createTagWrapper {

    }

    .createTag {
        background: #767676;
        color: whitesmoke;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px 0 16px;

        &-Wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>
