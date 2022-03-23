import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    email: "",
    PlanId: "",
    isCardSaved: false,
    basicTable: [],
    proTable: [],
    coinDetail: [],
    coinChart: []

  },
  getters: {
  },
  mutations: {
    CHANGE_ISLOGIN(state, payload) {
      state.isLogin = true
      state.email = payload.email
      state.PlanId = payload.PlanId
      state.isCardSaved = payload.isCardSaved
    },
    CHANGE_ISLOGINTOFALSE(state) {
      state.isLogin = false,
        state.email = "",
        state.PlanId = ""
    },
    CHANGE_ISSAVEDCARDTOTRUE(state) {
      state.isCardSaved = true
    },
    CHANGE_PLAN(state, payload) {
      state.PlanId = payload.PlanId
    },
    INSERT_BASICTABLE(state, payload) {
      state.basicTable = payload
    },
    INSERT_COINDETAIL(state, payload) {


      state.coinDetail = payload
    },
    INSERT_COINCHART(state, payload) {
      const dataChart = {}
      for (let i = 0; i < payload.prices.length; i++) {
        const date = new Date(payload.prices[i][0])
        const dateFormat = date.getDate() +
          "/" + (date.getMonth() + 1) +
          "/" + date.getFullYear() +
          " " + date.getHours() +
          ":" + date.getMinutes()
        dataChart[dateFormat] = payload.prices[i][1]
      }
      state.coinChart = dataChart
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
        context.commit("CHANGE_ISSAVEDCARDTOTRUE")

      } catch (error) {
        console.log(error);
      }
    },
    async changePlan(context, payload) {
      try {
        const data = {
          email: this.state.email,
          PlanId: payload.PlanId
        }

        await axios.patch("http://localhost:3000/user/update", data, {
          headers: { access_token: localStorage.access_token }
        })
        context.commit("CHANGE_PLAN", payload)

      } catch (error) {
        console.log(error);
      }
    },
    async getBasicTable(context) {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")

        context.commit("INSERT_BASICTABLE", response.data)
      } catch (error) {
        console.log(error);
      }

    },
    async getPagination(context, payload) {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=gecko_desc&per_page=10&page=${payload.page}&sparkline=false&price_change_percentage=24h`)

        context.commit("INSERT_BASICTABLE", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async getDetailCoin(context, payload) {
      try {
        const response1 = await axios.get(`https://api.coingecko.com/api/v3/coins/${payload.id}`)
        context.commit("INSERT_COINDETAIL", response1.data)
        const response2 = await axios.get(`https://api.coingecko.com/api/v3/coins/${payload.id}/market_chart?vs_currency=INR&days=30&interval=hourly`)
        context.commit("INSERT_COINCHART", response2.data)
      } catch (error) {
        console.log(error);
      }
    }
    // async getPaginationPrev(context, payload) {
    //   try {
    //     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=gecko_desc&per_page=10&page=${payload.page}&sparkline=false&price_change_percentage=24h`)
    //     context.commit("INSERT_BASICTABLE", response.data)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async getPaginationNex(context, payload) {
    //   try {
    //     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=gecko_desc&per_page=10&page=${payload.page}&sparkline=false&price_change_percentage=24h`)
    //     this.$store.state.currentPage = payload.page
    //     context.commit("INSERT_BASICTABLE", response.data)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },


  },
  modules: {
  }
})
