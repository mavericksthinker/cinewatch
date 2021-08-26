<template>
  <section class="navigation-composite w-full">
    <div class="navigation-container flex justify-content__space-between align-items__center">
      <Logo class="logo" :name="appName" />
      <Search class="search" />
      <AccountInfo class="account-info" :user-name="userName"/>
    </div>
    <Search class="search-840" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import Search from '@/components/Search.vue';
import AccountInfo from '@/components/AccountInfo.vue';

export default defineComponent({
  name: 'Navigation' as string,
  components: {
    Logo,
    Search,
    AccountInfo,
  },
  props: {
    appName: String,
  },
  computed: {
    userName(): string {
      // The user name should normally be coming from vuex state like this.$state.user.name
      // For now its just hardcoded to show a basic demonstration
      return 'Puglife';
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../scss/components/navigation";
</style>
