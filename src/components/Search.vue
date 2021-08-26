<template>
  <div class="search">
    <div class="search-container">
      <div class="search-bar bg-color-body-content flex align-items__center">
        <fa icon="search" class="search-icon"/>
        <input type="text" class="search-bar__input font-italic" placeholder="Find your match...">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
});
</script>

<style scoped lang="scss">
@import "src/scss/components/search";
</style>
