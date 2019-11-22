<template>
  <v-container class="mx-auto">
    <v-row no-gutters>
      <v-col
        v-for="category in categories"
        :key="category.title"
        cols="12"
        sm="3"
        class="pa-2 mx-auto"
      >
      <router-link
        :to="category.link"
      >
        <v-hover
          v-slot:default="{ hover }"
          :open-delay="openDelay"
          :close-delay="closeDelay"
          :disabled="disabled"
          :value="value"
          :style="{ cursor: 'pointer'}"
        >
          <v-card class="mx-auto" color="grey lighten-4" max-width="400">
            <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                  style="height: 100%;"
                >{{ category.title }}</div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import axios from "axios";

export default {
  data() {
    return {
      //categories: {},
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center",
      disabled: false,
      openDelay: "0",
      closeDelay: "0",
      value: false,
      categories: [
          {
              title: "Book Share",
              link: "book"
          },
          {
              title: "Contact Share",
              link: "contact"
          },
          {
              title: "General",
              link: "general"
          },
          {
              title: "Housing",
              link: "hosing"
          }
      ]
    }
  },
//   created() {
//     axios
//       .get("category/getAllCategory")
//       .then(response => (this.categories = response.data.data))
//       .catch(
//         error =>
//           /* eslint-disable no-console */
//           console.log(error)
//         /* eslint-disable no-console */
//       );
//   }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>