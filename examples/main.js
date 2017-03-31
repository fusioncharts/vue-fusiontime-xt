import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueFusionTime from '../src';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFusionTime);

import Web from './components/Web.vue';
import Stock from './components/Stock.vue';
import Mobile from './components/Mobile.vue';
import Slack from './components/Slack.vue';
import Ebola from './components/Ebola.vue';

const routes = [
  { path: '/',       component: Web },
  { path: '/stock',  component: Stock },
  { path: '/mobile', component: Mobile },
  { path: '/slack',  component: Slack },
  { path: '/ebola',  component: Ebola },
];

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	router: router
}).$mount('#vueApp');
