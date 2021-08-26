<template>
  <div class="account-info-container flex justify-content__center align-items__center">
    <div class="account-salutation-container">
      <div class="account-salutation">
        Logged in as <span class="user-name">{{ userName }}</span>
      </div>
    </div>
    <img src="../assets/images/pug.jpeg"
         :alt="salutation"
         class="user-image"
         v-on:click="showAccountPopup"
    >
    <div class="account-popup-container"
         :class="{visible: activateAccountPopup}"
    >
      <div class="account-salutation w-full">
        Logged in as <span class="user-name">{{ userName }}</span>
      </div>
      <div class="menu-container flex flex-col h-full">
        <a v-for="menuItem in menuItems"
           :key="menuItem.label"
           :href="menuItem.link"
           class="menu-link"
           :class="menuItem.className"
        >
          {{ menuItem.label }}
        </a>
      </div>
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
      required: true,
    },
  },
  data() {
    return {
      activateAccountPopup: false as boolean,
      menuItems: [
        {
          label: 'Preferences',
          className: 'preferences',
          link: '#',
        },
        {
          label: 'Settings',
          className: 'settings',
          link: '#',
        },
        {
          label: 'Help',
          className: 'help',
          link: '#',
        },
        {
          label: 'Logout',
          className: 'logout',
          link: '#',
        },
      ],
    };
  },
  methods: {
    showAccountPopup(): void {
      this.activateAccountPopup = !this.activateAccountPopup;
    },
  },
  computed: {
    salutation(): string {
      return `Logged in as ${this.userName}`;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/components/account-info";
</style>
