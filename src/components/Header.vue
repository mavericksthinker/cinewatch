<template>
  <header class="header-composite">
    <nav class="header-container">
      <Navigation class="navigation" app-name="Cinematch"/>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
  name: 'Header' as string,
  components: {
    Navigation,
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/header";
</style>
