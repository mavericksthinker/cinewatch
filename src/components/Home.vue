<template>
  <section class="loader-overlay" :class="{visible: loading}">
    <Loader class="loader"/>
  </section>
  <section class="header-composite">
    <Header class="header"/>
  </section>
  <section class="body-composite">
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Loader from '@/components/Loader.vue';

const BASE_URL = 'https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/';
const ACTORS = 'actors';
const MOVIES = 'movies';

export default defineComponent({
  name: 'Home',
  components: {
    Loader,
    Header,
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
      console.log('Making actors request');
      return this.axios.get(this.getUrlToRetrieveActors()).then(({ data }) => {
        this.generateObjectMapperForActors(data);
      });
    },
    getMovies() {
      console.log('Making movies request');
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
      movies.map((movie) => {
        const actors = movie.actorIds;
        actors.forEach((actorId, index) => {
          const actorDetails = this.actors[actorId];
          actors[index] = `${actorDetails?.firstName} ${actorDetails?.lastName}`;
        });
        return movie;
      });
      this.movies = movies;
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
