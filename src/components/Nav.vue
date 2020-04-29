<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"/>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="label"/>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">

  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('@/assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    name: 'Nav',
  };

</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        flex-direction: row;
        font-size: 12px;

        > .item {
            padding: 2px 0;
            width: 33.33333%;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            .icon {
                height: 32px;
                width: 32px;
            }
        }
        > .item.selected {
            color: 	#7FFFAA;
        }
    }
</style>