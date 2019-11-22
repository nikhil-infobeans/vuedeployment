<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Go Forum</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn fab text small>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>-->
    <template v-if="this.$store.state.isLoggedIn">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" icon class="ma-2" outlined>
            <v-icon medium>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!-- <v-list-item v-for="(item, index) in items" :key="index"> -->
          <!-- <v-btn @click="item.onClick">{{ item.title }}</v-btn> -->
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="handle_function_call(item.onClick)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-else>
      <Login></Login>
    </template>
  </v-app-bar>
</template>

<script>
import Login from "../Login";
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Profile", onClick: "profile" },
      { title: "Logout", onClick: "logout" }
    ]
  }),
  components: {
    Login
  },
  methods: {
    handle_function_call(function_name) {
      this[function_name]();
    },
    logout() {
      this.$store.dispatch("logout");
    },
    profile() {}
  }
};
</script>