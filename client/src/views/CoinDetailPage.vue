<template>
  <div>
    <CoinNavbar></CoinNavbar>

    <div class="row mt-5" style="width: 1440px; height: 700px">
      <div class="col-md-3 px-3" style="border-right: 2px solid grey">
        <div class="text-light">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="Bitcoin"
            height="200"
            style="margin-bottom: 20px"
          />

          <h3>Bitcoin</h3>
          <h6>
            Bitcoin is the first successful internet money based on peer-to-peer
            technology; whereby no central bank or authority is involved in the
            transaction and production of the Bitcoin currency.
          </h6>
          <h5>Rank:</h5>
          <h5>Current Price:</h5>
          <h5>Market Cap:</h5>
        </div>
      </div>

      <div class="col-md-9">
        <div class="bg-warning">test</div>
      </div>
    </div>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";

export default {
  name: "CoinDetailPage",
  components: { CoinNavbar },
};
</script>

<style>
</style>