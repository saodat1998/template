import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
        themes: {
          light: {
            // primary: '#ffd615',
            primary: '#ff9715',
            background: '#E5E5E5',
            lightGray: '#FBFBFB',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
