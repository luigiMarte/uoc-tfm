import { createStore } from "vuex";
import { createUser } from "@/services/api/auth";

export default createStore({
  state: {
    userData: "USER",
    token: "",
    userId: "",
  },
  getters: {},
  mutations: {
    SET_USER(state, data) {
      debugger;
      state.token = data;
    },
  },
  actions: {
    async createNewUser({ commit }, payload) {
      try {
        debugger;
        console.log("ACTION");
        const resp = await createUser(payload);
        commit("SET_USER", resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
