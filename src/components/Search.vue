<template>
  <div class="search-container
              flex
              bg-color-body-content
              align-items__center
  ">
    <fa icon="search" class="search-icon"/>
    <input type="text" class="search-input font-italic" placeholder="Find your match...">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search' as string,
});
</script>

<style scoped lang="scss">
@import "src/scss/components/search";
</style>
