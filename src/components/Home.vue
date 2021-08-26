<template>
  <header class="header-composite">
    <Header class="header"/>
  </header>
  <main class="body-main">
    <section class="body-composite">
      <Movies :movies="[ ...movies ]"/>
    </section>
  </main>
  <Loader class="loader" :class="{visible: loading}" />
</template>

<script>
import { defineComponent } from 'vue';
import Loader from '@/components/Loader.vue';
import Header from '@/components/Header.vue';
import Movies from '@/components/Movies.vue';

const BASE_URL = 'https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/';
const ACTORS = 'actors';
const MOVIES = 'movies';

export default defineComponent({
  name: 'Home',
  components: {
    Loader,
    Header,
    Movies,
  },
  created() {
    this.getRequiredPageData();
  },
  data() {
    return {
      search: '',
      loading: false,
      actors: {},
      moviesList: [],
      movies: [],
      page: 1,
      offset: 6,
    };
  },
  methods: {
    getRequiredPageData() {
      this.loading = true;
      this.axios.all([this.getActors(), this.getMovies()]).then(([actors, movies]) => {
        this.generateObjectMapperForActors(actors.data);
        this.storeMoviesList(movies.data);
        this.initiateLazyLoadingOfMovieList();
      });
    },
    getActors() {
      return this.axios.get(this.getUrlToRetrieveActors());
    },
    getMovies() {
      return this.axios.get(this.getUrlToRetrieveMovies());
    },
    generateObjectMapperForActors(actors) {
      actors.forEach((actor) => {
        if (!this.actors || !this.actors[actor.id]) {
          this.actors[actor.id] = {
            firstName: actor.first_name,
            lastName: actor.last_name,
          };
        }
      });
    },
    storeMoviesList(movies) {
      this.moviesList = movies;
    },
    initiateLazyLoadingOfMovieList() {
      this.movies = [];
      this.page = 1;
      this.performLazyLoading();
    },
    performLazyLoading() {
      this.loading = true;
      const contentLoaded = this.movies.length;
      let newMovies = [];
      const elementsToBeLoaded = this.page * this.offset;
      for (let i = contentLoaded; i < elementsToBeLoaded; i += 1) {
        newMovies.push(
          this.moviesList[i],
        );
      }
      newMovies = this.resolveMoviesDetails(newMovies);
      this.movies = [...this.movies, ...newMovies];
      this.page += 1;
      this.loading = false;
    },
    resolveMoviesDetails(movies) {
      return movies.map((movie) => {
        const movieData = { ...movie };
        const actors = [...movie.actorIds];
        actors.forEach((actorId, index) => {
          const actorDetails = this.actors[actorId];
          const firstName = actorDetails?.firstName;
          const lastName = actorDetails?.lastName;
          actors[index] = `${firstName} ${lastName}`;
          movieData.actorIds = actors;
        });
        return movieData;
      });
    },
    getUrlToRetrieveMovies() {
      return BASE_URL + MOVIES;
    },
    getUrlToRetrieveActors() {
      return BASE_URL + ACTORS;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/home";
</style>
