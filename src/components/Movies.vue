<template>
  <div class="movies-container
              flex
              flex-wrap
              align-items__center
              w-full
              justify-content__space-between"
       v-if="movies.length"
  >
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div class="no-movies-found" v-else>
    No movies found
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Movie from '@/components/Movie.vue';

export default defineComponent({
  name: 'Movies' as string,
  props: {
    movies: Array,
  },
  components: {
    Movie,
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/movies";
</style>
