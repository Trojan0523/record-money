<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id"
                         :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
        <div class="createTag-Wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import {Component,} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import {TagHelper} from '@/mixins/TagHelper';


  @Component({
    components: {Button},
  })
  export default class Labels extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList;
    }

    beforeCreate() {
      this.$store.commit('fetchTags');
    }

  }
</script>
<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
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
