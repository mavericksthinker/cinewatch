<template>
  <fa icon="spinner" class="logo-icon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader' as string,
});
</script>

<style scoped lang="scss">
@import "src/scss/components/loader";
</style>
