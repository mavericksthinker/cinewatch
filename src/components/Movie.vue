<template>
  <a class="movie-link" :href="movie.pageUrl" target="_blank" rel="noopener">
  <div ref="movieContainer"
       :id="`movie-container-${movie.id}`"
       class="movie-container flex align-items__flex-end flex-col justify-content__flex-end"
       :data-src="movie.posterUrl"
  >
    <div class="movie-card">
      <h1 class="movie-title">{{ movie.title }}</h1>
      <h2 class="movie-rating">
        {{ getMovieRating }}
        <span class="movie-rating-over">/10</span>
      </h2>
      <div class="movie-description">
        <h2 class="movie-starring">{{ getMovieStarring }}</h2>
        <div class="movie-plot">{{ getMoviePlot }}</div>
      </div>
    </div>
  </div>
  </a>
</template>

<script>
import { defineComponent } from 'vue';
import backupImage from '../assets/images/not-found.jpeg';

export default defineComponent({
  name: 'movie',
  props: {
    movie: {},
  },
  data() {
    return {
      movieContainer: null,
      movieContainerObserver: null,
      movieContainerObserverOption: {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    };
  },
  mounted() {
    this.registerMovieContainerObserver();
  },
  methods: {
    handleMovieContainerObserver(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.movieContainer.style.backgroundImage = `
               url(${this.movie.posterUrl}),
               url("${backupImage}")
            `;
          this.movieContainerObserver.disconnect();
        }
      });
    },
    registerMovieContainerObserver() {
      this.movieContainer = document.querySelector(`#movie-container-${this.movie.id}`);
      if (this.movieContainer) {
        this.movieContainerObserver = new IntersectionObserver(
          this.handleMovieContainerObserver,
          this.movieContainerObserverOption,
        );
        this.movieContainerObserver.observe(this.movieContainer);
      }
    },
  },
  computed: {
    getMovieRating() {
      return `${this.movie.rating || 0}`;
    },
    getMovieStarring() {
      const actorsList = this.movie.actorIds.join(', ');
      return actorsList ? `Starring: ${this.movie.actorIds.join(', ')}` : '';
    },
    getMoviePlot() {
      return `${this.movie.plot.substr(0, 100)}...`;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/movie";
</style>
