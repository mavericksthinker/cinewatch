import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import '@/scss/_style.scss';
import App from './App.vue';

library.add(faFilm);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app');