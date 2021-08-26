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
    <infinite-scroll
      @infinite-scroll="infiniteHandler"
      class="infinite-movie-loader w-full"
      :class="{visible: loadMore}"
    >
    </infinite-scroll>
  </div>
  <div class="no-movies-found" v-else>
    No movies found
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import InfiniteScroll from 'infinite-loading-vue3';
import Movie from '@/components/Movie.vue';

export default defineComponent({
  name: 'Movies',
  props: {
    movies: {
      type: Array,
      required: true,
    },
    totalLength: {
      type: Number,
      required: true,
    },
  },
  components: {
    Movie,
    InfiniteScroll,
  },
  methods: {
    infiniteHandler() {
      const moviesToBeLoaded = this.movies?.length < this.totalLength;
      if (moviesToBeLoaded) this.$emit('loadMore');
    },
  },
  computed: {
    loadMore() {
      return this.movies?.length < this.totalLength;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/movies";
</style>
