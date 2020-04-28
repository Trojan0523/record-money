<template>
    <div class="nav">
        <router-link to="/money">
            <svg>
                <use xlink:href="#money"/>
            </svg>
            记账
        </router-link>
        <router-link to="/labels">
            <svg>
                <use xlink:href="#label"/>
            </svg>
            标签
        </router-link>
        <router-link to="/statistics">
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('@/assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  // import x from '@/assets/icons/label.svg';
  // import y from '@/assets/icons/money.svg';
  // import z from '@/assets/icons/statistics.svg';
  export default {
    name: 'Nav'
  };
  // console.log(x);
  // console.log(y);
  // console.log(z);
</script>

<style lang="scss" scoped>
    .nav {
        border: 1px solid red;
    }
</style>