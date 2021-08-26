<template>
  <div class="account-info-container flex justify-content__center align-items__center">
    <div class="account-salutation-container">
      <div class="account-salutation">
        Logged in as <span class="user-name">{{ userName }}</span>
      </div>
    </div>
    <img src="../assets/images/pug.jpeg" :alt="salutation" class="user-image">
    <div class="account-salutation-popup">
      Logged in as <span class="user-name">{{ userName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountInfo',
  props: {
    userName: {
      type: String,
      default: 'User',
    },
  },
  computed: {
    salutation() {
      return `Logged in as ${this.userName}`;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/account-info";
</style>
