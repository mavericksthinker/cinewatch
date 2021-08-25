<template>
  <nav class="navigation-composite">
    <div class="navigation-container">
      <div class="navigation-container__logo-container flex justify-content__space-evenly">
        <div class="navigation-container__logo-container__logo-icon">
          Icon
        </div>
        <div class="navigation-container__logo-container__logo-text
                    font-weight-bolder
                    font-pt
                    font-italic
                    font-size-37
        ">
          Cinematch
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/navigation";
</style>
