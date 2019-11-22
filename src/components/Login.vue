<template>
  <GoogleLogin
    :params="params"
    :renderParams="renderParams"
    :onSuccess="onSuccess"
    :onFailure="onFailure"
  ></GoogleLogin>
</template>>
<script>
import GoogleLogin from "vue-google-login";
export default {
  data() {
    return {
      params: {
        client_id:
          "793403548031-o7iokbqo2goat7oq2tg2dtl8g4aigooj.apps.googleusercontent.com",
        fetch_basic_profile: true
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      userData: {
          name: '',
          fullName: '',
          tokenId: ''
      }
    };
  },
  methods: {
    onSuccess(googleUser) {
      this.userData.tokenId = googleUser.getAuthResponse().id_token
      this.userData.name = googleUser.getBasicProfile().getName()
      this.userData.fullName = googleUser.getBasicProfile().getGivenName()
      this.$store.dispatch("authorizeUser", this.userData);
    },
    onFailure(error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-disable no-console */
    }
  },
  components: {
    GoogleLogin
  }
};
</script>>