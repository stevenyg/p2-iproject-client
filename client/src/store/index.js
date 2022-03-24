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
    coinDetail: [],
    coinChart: [],
    maxChart: 0,
    minChart: 0,
    creditCard: {}

  },
  getters: {
  },
  mutations: {
    CHANGE_ISLOGIN(state, payload) {
      state.isLogin = true
      state.email = payload.email
      state.PlanId = payload.PlanId
      state.isCardSaved = payload.isCardSaved
      state.creditCard = payload.card
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
      let min = Infinity
      let max = 0
      for (let i = 0; i < payload.prices.length; i++) {
        if (payload.prices[i][1] < min) {
          min = payload.prices[i][1]
        }

        if (payload.prices[i][1] > max) {
          max = payload.prices[i][1]
        }
        state.maxChart = max
        state.minChart = min

        const date = new Date(payload.prices[i][0])
        const dateFormat = date.getDate() +
          "/" + (date.getMonth() + 1) +
          "/" + date.getFullYear() +
          " " + date.getHours() + ":00"
        dataChart[dateFormat] = payload.prices[i][1]
      }

      state.coinChart = dataChart
    }
  },
  actions: {
    async doLogin(context, payload) {
      try {
        const response = await axios.post("https://uppsalafox21-coin.herokuapp.com/user/login", payload, {})
        localStorage.access_token = response.data.access_token
        context.commit("CHANGE_ISLOGIN", response.data)

      } catch (error) {
        console.log(error);
      }

    },
    async doRegister(context, payload) {
      try {
        await axios.post("https://uppsalafox21-coin.herokuapp.com/user/register", payload, {})
      } catch (error) {
        console.log(error);
      }
    },

    async sendTokenToServer(context, payload) {
      try {

        await axios.post("https://uppsalafox21-coin.herokuapp.com/user/card", payload, {
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

        await axios.patch("https://uppsalafox21-coin.herokuapp.com/user/update", data, {
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
        const response2 = await axios.get(`https://api.coingecko.com/api/v3/coins/${payload.id}/market_chart?vs_currency=INR&days=1&interval=hourly`)
        context.commit("INSERT_COINCHART", response2.data)
      } catch (error) {
        console.log(error);
      }
    },

    async getLoggedInUser(context) {
      try {
        const response1 = await axios.get("https://uppsalafox21-coin.herokuapp.com/user/data", {
          headers: { access_token: localStorage.access_token }
        })
        context.commit("CHANGE_ISLOGIN", response1.data)
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
