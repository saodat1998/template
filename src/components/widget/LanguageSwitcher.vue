<template>
  <div class="language-switch elevation-5 mr-5 mt-1">
    <v-select width="30px" dark @change="changeLocale" :items="langs" v-model="$i18n.locale"></v-select>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "LanguageSwitcher",

  data() {
    return {
      langs: ["uz", "ru"],
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      const route = Object.assign({}, this.$route);
      if (route.params.lang != locale) {
        route.params.lang = locale;
        this.$store.commit("setApiLocale", locale);
        Vue.http.headers.common["lang"] = locale;
        this.$router.push(route);
      }
    },
  },
  mounted() {
    this.$store.commit("setApiLocale", this.$route.params.lang);
    window.localStorage.setItem("lang", this.$route.params.lang);
    this.changeLocale(this.$route.params.lang);
  },
};
</script>

<style lang="scss" scoped>
// .language-switch{
//   position: fixed;
//   bottom: 10%;
//   right: 0px;
//   z-index:9999;
// }
.language-switch {
  width: 50px;
}
</style>
<style>
.v-menu__content.theme--light
  .v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light {
  color: #000 !important;
}
</style>