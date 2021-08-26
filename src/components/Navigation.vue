<template>
  <nav class="navigation-container">
    <Logo class="logo" name="Cinematch" />
    <Search class="search" style="width: 20%"></Search>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import Search from '@/components/Search.vue';

export default defineComponent({
  name: 'Navigation',
  components: {
    Logo,
    Search,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/navigation";
</style>
