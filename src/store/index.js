import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import todo from "@/store/modules/todo";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "todo",
  storage: window.localStorage
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {},
  modules: {
    todo
  },
  plugins: [vuexPersist.plugin]
});
