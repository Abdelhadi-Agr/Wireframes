require('./bootstrap');



// import {createApp} from 'vue';
// import router from './router'
// import Companiesindex from './components/companies/Companiesindex'
// createApp({
//     components:{
//         Companiesindex
//     }
// }).use(router).mount('#app')
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
import {createApp} from 'vue';
import router from './router'
import LaravelVuePagination from 'laravel-vue-pagination'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp()
app.component('Pagination',LaravelVuePagination)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')