<template>
  <v-app>
    <ToolbarWidget />
    <router-view />
    <snackbar-message v-model="$store.getters.message" :color="$store.getters.color"></snackbar-message>
  </v-app>
</template>

<script>
import ToolbarWidget from "@/components/widget/ToolbarWidget";
import SnackbarMessage from "@/components/snackbar/SnackbarMessage";

export default {
  name: "app",
  components: {
    SnackbarMessage,
    ToolbarWidget
  },
  beforeMount() {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  methods: {},
  mounted() {
  }
};
</script>

<style lang="scss">
@import "styles/App.scss";
</style>
