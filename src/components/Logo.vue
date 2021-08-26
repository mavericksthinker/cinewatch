<template>
  <div class="logo-container
              flex
              align-items__center"
  >
    <div class="logo-icon-container">
      <fa icon="film" class="logo-icon" />
    </div>
    <div class="logo-label-container">
      <h1 class="logo-label
                    font-weight-bolder
                    font-pt
                    font-italic"
      >{{name}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo' as string,
  props: {
    name: String,
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/logo";
</style>
