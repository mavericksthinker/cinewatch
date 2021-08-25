<template>
  <nav class="navigation-composite">
    <div class="navigation-container">
      <Logo name="Cinematch" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'Navigation',
  components: {
    Logo,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/navigation";
</style>
