<template>
  <div>
    <CoinNavbar></CoinNavbar>

    <div class="row mt-5" style="width: 1440px; height: 700px">
      <div
        class="col-md-3 px-3 d-flex justify-content-center"
        style="border-right: 2px solid grey"
      >
        <div class="text-light">
          <img
            :src="getDetail.image.large"
            alt="Bitcoin"
            height="200"
            style="margin-bottom: 20px"
          />

          <h3>{{ getDetail.name }}</h3>

          <h5>Rank: {{ getDetail.market_cap_rank }}</h5>

          <h5>
            Market Cap: IDR
            {{
              new Intl.NumberFormat("id-ID", {
                currency: "IDR",
              }).format(
                Math.floor(getDetail.market_data.market_cap.idr / 1000000000000)
              )
            }}
            B
          </h5>
        </div>
      </div>

      <div class="col-md-9">
        <h1 class="text-center text-warning">Monthly Time Frame</h1>
        <line-chart
          class="mt-5"
          :data="getChart"
          width="1000px"
          height="500px"
          :min="getMinChart"
          :max="getMaxChart"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";

export default {
  name: "CoinDetailPage",
  data() {
    return {
      chartData: {
        "2017-05-13": 2,
        "2017-05-14": 5,
        "2017-05-15": 4,
      },
    };
  },
  components: { CoinNavbar },
  computed: {
    getDetail() {
      return this.$store.state.coinDetail;
    },
    getChart() {
      return this.$store.state.coinChart;
    },
    getMaxChart() {
      return this.$store.state.maxChart;
    },
    getMinChart() {
      return this.$store.state.minChart;
    },
  },
};
</script>

<style>
</style>