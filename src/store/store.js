import { createStore } from "vuex";
import { createUser } from "@/services/api/auth";
import axios from "axios";

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
      console.log("MUTATION");
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
        return resp;
      } catch (error) {
        return error;
      }
    },
    // async createNewUser({ commit }, payload) {
    //   try {
    //     commit("SET_USER", await createUser(payload));
    //   } catch (error) {
    //     console.log("ACTIÇON", error);
    //   }
    // },
  },
});
