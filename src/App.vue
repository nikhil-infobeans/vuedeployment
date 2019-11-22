<template>
<div>
  <template v-if="!$route.meta.allowAnonymous">
  <v-app>
    <go-forum-Header></go-forum-Header>
    <go-forum-sidebar></go-forum-sidebar>
    <v-content class="white">
      <v-container>
      <router-view></router-view>
      </v-container>
    </v-content>
    <go-forum-footer></go-forum-footer>
  </v-app>
  </template>
   <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Sidebar from './components/Layout/Sidebar.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  name: 'App',
  components: {
    'go-forum-Header': Header,
    'go-forum-sidebar': Sidebar,
    'go-forum-footer': Footer
  }
};
</script>
