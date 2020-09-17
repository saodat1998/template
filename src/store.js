import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '@/i18n.js';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		token: '',
		navigation: true,
		user: [],
		toolbar: true,
		authorized: false,
		apiUrl: 'http://localhost:8082/api',
		apiLocale: window.localStorage.getItem('lang') || 'uz',
		message: '',
		color: '',
	},
	getters: {
		token: state => state.token,
		navigation: state => state.navigation,
		toolbar: state => state.toolbar,
		authorized: state => state.authorized,
		apiUrl: state => {
			return state.apiUrl;
		},
		message: state => state.message,
		color: state => state.color,
		user: state => state.user,
		apiLocale: state => {
			i18n.locale = state.apiLocale
			return state.apiLocale
		}
	},
	mutations: {
		user(state, user) {
			let newUser = user;
			let userName = newUser.firstName + ' ' + newUser.lastName;
			newUser.userName = userName;
			state.user = newUser;
		},
		phone(state, phone) {
			state.phone = phone;
		},
		token(state, token) {
			state.token = token;
			Vue.http.headers.common['token'] = token;
			if (token) {
				// state.toolbar = true;
				state.authorized = true;
				// state.navigation = true;
				window.localStorage.setItem('token', token);
			} else {
				state.authorized = false;
				// state.toolbar = false;
				// state.navigation = false;
				window.localStorage.removeItem('token');
			}
		},
		navigation(state, navigation) {
			state.navigation = navigation;
		},
		toolbar(state, toolbar) {
			state.toolbar = toolbar;
		},
		authorized(state, authorized) {
			state.authorized = authorized;
		},
		errorMessage(state, errorMessage) {
			state.message = errorMessage;
			state.color = 'error';
		},
		successMessage(state, successMessage) {
			state.message = successMessage;
			state.color = 'success';
		},
		infoMessage(state, infoMessage) {
			state.message = infoMessage;
			state.color = 'info';
		},
		message(state, message) {
			state.message = message;
		},
		color(state, color) {
			state.color = color;
		},
		setApiLocale(state, locale) {
			state.apiLocale = locale;
			window.localStorage.setItem('lang', locale)
		},
	},
});
