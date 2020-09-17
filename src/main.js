import Vue from 'vue';
import App from './App.vue';
import mixins from './plugins/mixins';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import SnackbarMessage from './components/snackbar/SnackbarMessage';
import VueI18n from 'vue-i18n';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
Vue.use(mixins);
Vue.use(SnackbarMessage);
Vue.use(VueResource);

Vue.use(VueI18n);

Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});
Vue.config.productionTip = false;

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.options.root = store.getters.apiUrl;
new Vue({
	router,
	store,
	i18n,
	vuetify,
	render: h => h(App),
}).$mount('#app');
