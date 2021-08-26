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
  created() {
    this.getActors();
  },
  data() {
    return {
      search: '' as string,
      loading: false as boolean,
      actors: {} as Record<string, Record<string, string>>,
      movies: [],
    };
  },
  methods: {
    getActors() : void {
      this.axios.get('https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/actors').then(({ data }) => {
        this.generateObjectMapperForActors(data);
      });
    },
    generateObjectMapperForActors(actors: Array<Record<string, string>>) {
      actors.forEach((actor: Record<string, string>) => {
        if (!this.actors[actor.id]) {
          this.actors[actor.id] = {
            firstName: actor.first_name,
            lastName: actor.last_name,
          };
        }
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/home";
</style>
