<template>
  <div class="container-fluid">
    <CoinNavbar></CoinNavbar>
    <div class="row">
      <div class="col-md-12 mt-3 px-0">
        <img
          class="w-100"
          style="height: 450px"
          src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2746&q=80"
        />
      </div>
      <div class="col-md-12 mt-3">
        <div style="margin: auto; max-width: 1200px">
          <h1 class="text-warning d-flex justify-content-center">
            Cryptocurrency Prices
          </h1>
          <form role="form">
            <div class="form-group">
              <input
                type="search"
                placeholder="Search Crypto"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
          </form>
          <TableCoinBasic
            v-if="getPlanId === 1 || getPlanId === ''"
          ></TableCoinBasic>

          <TableCoinPro v-if="getPlanId === 2"></TableCoinPro>

          <TableCoinExpert v-if="getPlanId === 3"></TableCoinExpert>

          <nav>
            <ul class="pagination d-flex justify-content-center">
              <li class="page-item">
                <a class="page-link text-dark" href="#">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <SubscribeCard></SubscribeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";
import SubscribeCard from "../components/SubscribeCard.vue";
import TableCoinBasic from "../components/TableCoinBasic.vue";
import TableCoinPro from "../components/TableCoinPro.vue";
import TableCoinExpert from "../components/TableCoinExpert.vue";

export default {
  name: "HomePage",
  computed: {
    getPlanId() {
      return this.$store.state.PlanId;
    },
  },
  components: {
    CoinNavbar,
    SubscribeCard,
    TableCoinBasic,
    TableCoinPro,
    TableCoinExpert,
  },
};
</script>

<style>
</style>