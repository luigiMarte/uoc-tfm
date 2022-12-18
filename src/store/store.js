import { createStore } from "vuex";
import { createUser, userLogin } from "@/services/api/auth";
import { createUserData } from "@/services/api/user";
//import axios from "axios";

export default createStore({
  state: {
    userData: "USER",
    userToken: "",
    token: "",
    userId: "",
    userInfo: {},
  },
  getters: {},
  mutations: {
    SET_USER(state, data) {
      debugger;
      state.userToken = data;
    },
    SET_LOGIN(state, data) {
      state.token = data.token;
      state.userId = data.userId;
    },
    SET_DATA(state, data) {
      console.log("mutation data", data);
      state.userInfo = data;
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

    async userLogin({ commit }, payload) {
      try {
        console.log("ACTION LOGIN");
        const resp = await userLogin(payload);
        commit("SET_LOGIN", resp.data);
        return resp;
      } catch (error) {
        return error;
      }
    },

    async sendUserData({ commit, state }, payload) {
      try {
        let stateUserId = state.userId;
        let stateToken = state.token;
        console.log("ACTION", stateUserId, stateToken);
        const resp = await createUserData(payload, stateUserId, stateToken);
        commit("SET_DATA", resp.data);
        console.log("resp -> data", resp.data);
        return resp;
      } catch (error) {
        return error;
      }
    },
  },
});
