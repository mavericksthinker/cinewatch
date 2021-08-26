<template>
  <header class="header-container">
    <Navigation class="navigation flex justify-content__space-around"/>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Navigation,
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/header";
</style>
