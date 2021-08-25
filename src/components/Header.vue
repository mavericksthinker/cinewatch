<template>
  <Navigation/>
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
@import "src/scss/components/header.scss";
</style>
