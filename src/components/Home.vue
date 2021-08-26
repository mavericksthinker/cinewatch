<template>
  <header class="header-composite">
    <Header class="header"/>
  </header>
  <main class="body-main">
    <section class="body-composite">
      <Movies :movies="movies"/>
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
    this.getActors();
  },
  mounted() {
    this.getMovies();
  },
  data() {
    return {
      search: '',
      loading: false,
      actors: {},
      movies: [],
    };
  },
  methods: {
    getActors() {
      this.loading = true;
      return this.axios.get(this.getUrlToRetrieveActors()).then(({ data }) => {
        this.generateObjectMapperForActors(data);
      });
    },
    getMovies() {
      return this.axios.get(this.getUrlToRetrieveMovies()).then(({ data }) => {
        this.resolveMoviesDetails(data);
      });
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
    resolveMoviesDetails(movies) {
      this.loading = true;
      movies.map((movie) => {
        const actors = movie.actorIds;
        actors.forEach((actorId, index) => {
          const actorDetails = this.actors[actorId];
          actors[index] = `${actorDetails?.firstName} ${actorDetails?.lastName}`;
        });
        return movie;
      });
      this.movies = movies;
      this.loading = false;
      console.log(this.movies[1]);
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
