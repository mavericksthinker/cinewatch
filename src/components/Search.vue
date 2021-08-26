<template>
  <div class="search-container
              flex
              bg-color-body-content
              align-items__center
  ">
    <fa icon="search" class="search-icon"/>
    <input type="text" class="search-input font-italic"
           v-model="search"
           placeholder="Find your match..."
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      this.performSearch();
    },
  },
  methods: {
    performSearch() {
      setTimeout(() => {
        console.log('Searching...');
      }, 500);
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/search";
</style>
