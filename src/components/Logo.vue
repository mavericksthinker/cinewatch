<template>
  <div class="logo-container
              flex
              align-items__center"
  >
    <div class="logo-container__logo-icon-container">
      <fa icon="film" class="logo-icon" />
    </div>
    <div class="logo-container__logo-text-container">
      <label class="logo-text
                    font-weight-bolder
                    font-pt
                    font-italic"
      >{{name}}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  props: {
    name: String,
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/logo";
</style>
