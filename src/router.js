import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import RouterView from './views/RouterView';
import i18n from './i18n.js';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/:lang',
			component: RouterView,
			beforeEnter(to, from, next) {
				if (to.params.locale === from.params.locale) {
					next();
					return;
				}

				const lang = to.params.lang;
				if (!['uz', 'ru'].includes(lang)) return next('ru');
				if (i18n.locale !== lang) {
					i18n.locale = lang;
				}
				return next();
			},
			children: [
				{
					path: '/',
					name: 'home',
					component: Home,
				},
			],
		},

		{
			path: '*',
			redirect: `${i18n.locale}/`,
		},
	],
});
