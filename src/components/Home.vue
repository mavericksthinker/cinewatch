<template>
  <section class="loader-overlay">
    <Loader class="loader"/>
  </section>
  <section class="header-composite">
    <Header class="header"/>
  </section>
  <section class="body-composite">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Loader from '@/components/Loader.vue';

export default defineComponent({
  name: 'Home' as string,
  components: {
    Loader,
    Header,
  },
  // created() {
  //
  // },
  data() {
    return {
      search: String,
      actors: {},
      movies: [],
    };
  },
  methods: {
    // getActors() {
    //
    // },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/home";
</style>
