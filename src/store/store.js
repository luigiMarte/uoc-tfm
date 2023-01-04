import { createStore } from "vuex";
import { createUser, userLogin, getUser, getPilot } from "@/services/api/auth";
import { createUserData } from "@/services/api/user";
import { updateUserProfile } from "../services/api/user";
import { getPilotsByCity } from "../services/api/user";
//import axios from "axios";

export default createStore({
  state: {
    userData: "USER",
    userToken: "",
    token: "",
    userId: "",
    isLogin: false,
    userInfo: {},
    pilotInfo: {},
    newUser: {},
    newUserComplete: {},
    pilots: [],
    selectedPilot: {},
  },
  getters: {},
  mutations: {
    // SET_USER(state, data) {
    //   debugger;
    //   state.userToken = data;
    // },
    SET_USER(state, data) {
      state.newUser = data;
    },
    SET_USER_COMPLETE(state, data) {
      debugger;
      state.newUserComplete = data;
    },
    SET_LOGIN(state, data) {
      state.token = data.token;
      state.userId = data.userId;
      state.isLogin = true;
    },
    SET_LOGOUT(state) {
      state.isLogin = false;
      state.token = "";
      state.userToken = "";
      state.userId = "";
    },
    SET_DATA(state, data) {
      console.log("mutation data", data);
      state.userInfo = data;
    },
    SET_USER_INFO(state, data) {
      state.userInfo = data;
    },
    SET_PILOT_INFO(state, data) {
      state.pilotInfo = data;
    },
    SET_PILOTS_CITY(state, data) {
      state.pilots = data;
    },
    SET_SELECTED_PILOT(state, data) {
      state.selectedPilot = data;
    },
  },
  actions: {
    //async completeNewUser({ commit }, payload)
    async createNewUser({ commit }, payload) {
      try {
        debugger;
        console.log("ACTION");
        //const resp = await createUser(payload);
        //commit("SET_USER", resp.data);
        commit("SET_USER", payload);
        let ok = "ok";
        return ok;
      } catch (error) {
        return error;
      }
    },
    async completeNewUser({ commit }, payload) {
      try {
        debugger;
        console.log("ACTION", payload);
        const resp = await createUser(payload);
        commit("SET_USER_COMPLETE", resp.data);
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

    async sendUserData({ state }, payload) {
      try {
        let stateUserId = state.userId;
        let stateToken = state.token;
        console.log("ACTION", stateUserId, stateToken);
        const resp = await createUserData(payload, stateUserId, stateToken);
        console.log("resp -> data", resp.data);
        return resp;
      } catch (error) {
        return error;
      }
    },
    // When get id from state - for user that is logged
    async getUserbyId({ commit, state }) {
      try {
        let stateUserId = state.userId;
        const resp = await getUser(stateUserId);
        commit("SET_USER_INFO", resp.data);
        return resp;
      } catch (error) {
        return error;
      }
    },
    // When we send id from user card
    async getPilotById({ commit }, userId) {
      console.log("actin getPilotById", userId);
      try {
        const resp = await getPilot(userId);
        commit("SET_PILOT_INFO", resp.data);
        return resp;
      } catch (error) {
        return error;
      }
    },
    // async getFavorite({ commit, state }) {
    //   try {
    //     let stateUserId = state.userId;
    //     const resp = await getUser(stateUserId);
    //     commit("SET_USER_INFO2", resp.data);
    //     return resp;
    //   } catch (error) {
    //     return error;
    //   }
    // },
    async updateProfile({ state }, payload) {
      debugger;
      let filledData = Object.keys(payload).reduce((acc, curr) => {
        if (payload[curr]) {
          acc[curr] = payload[curr];
        }
        return acc;
      }, {});
      try {
        let stateUserId = state.userId;
        let stateToken = state.token;
        console.log("ACTION", filledData, stateUserId, stateToken);
        const resp = await updateUserProfile(
          filledData,
          stateUserId,
          stateToken
        );
        return resp;
      } catch (error) {
        return error;
      }
    },
    async searchByCity({ commit, state }, payload) {
      try {
        const resp = await getPilotsByCity(payload);
        if (state.isLogin === false) {
          let total = 3; // total documents you want
          let limitedData = resp.data.filter((e) => e.enabled).slice(0, total);
          commit("SET_PILOTS_CITY", limitedData);
        } else {
          commit("SET_PILOTS_CITY", resp.data);
        }

        return resp;
      } catch (error) {
        return error;
      }
    },
  },
});
