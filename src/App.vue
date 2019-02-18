<template>
  <div id="app">
    <v-app>
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-title>Vue Layouts Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click="routeToLayoutPage">Layouts Menu</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    routeToLayoutPage() {
      this.$router.push('/layouts');
    }
  }
};
</script>

<style lang="scss">
// Overtide vuetify css
a {
  color: black !important; // not use it usually
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-content {
  align-items: center;
  .container {
    height: calc(100vh - 122px);
  }
}
</style>
