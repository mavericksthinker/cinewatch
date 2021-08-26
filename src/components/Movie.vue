<template>
  <div class="movie-container flex align-items__flex-end flex-col justify-content__flex-end"
       :style="{ backgroundImage: `url(${movie.posterUrl})` }"
  >
    <div class="movie-card">
      <div class="movie-title">{{ movie.title }}</div>
      <div class="movie-rating">
        {{ getMovieRating }}
        <span class="movie-rating-over">/10</span>
      </div>
      <div class="movie-description">
        <div class="movie-starring">{{ getMovieStarring }}</div>
        <div class="movie-plot">{{ getMoviePlot }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'movie',
  props: {
    movie: {},
  },
  computed: {
    getMovieRating() {
      return `${this.movie.rating || 0}`;
    },
    getMovieStarring() {
      return `Starring: ${this.movie.actorIds.join(', ')}`;
    },
    getMoviePlot() {
      return `${this.movie.plot.substr(0, 120)}...`;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/movie";
</style>
