import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import VueAxios from 'vue-axios';

import '@/scss/_style.scss';
import App from './App.vue';

library.add(faFilm, faSearch, faSpinner);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(VueAxios, axios)
  .mount('#app');
