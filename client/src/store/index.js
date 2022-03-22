import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    email: "",
    PlanId: "",
  },
  getters: {
  },
  mutations: {
    CHANGE_ISLOGIN(state, payload) {
      state.isLogin = true,
        state.email = payload.email,
        state.PlanId = payload.PlanId
    },
    CHANGE_ISLOGINTOFALSE(state) {
      state.isLogin = false,
        state.email = "",
        state.PlanId = ""
    }
  },
  actions: {
    async doLogin(context, payload) {
      try {
        const response = await axios.post("http://localhost:3000/user/login", payload, {})
        localStorage.access_token = response.data.access_token
        context.commit("CHANGE_ISLOGIN", response.data)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }

    },
    async doRegister(context, payload) {
      try {
        await axios.post("http://localhost:3000/user/register", payload, {})
      } catch (error) {
        console.log(error);
      }
    },

    async sendTokenToServer(context, payload) {
      try {

        await axios.post("http://localhost:3000/user/card", payload, {
          headers: { access_token: localStorage.access_token }
        })

      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
