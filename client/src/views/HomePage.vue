<template>
  <div>
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
        <div class="col-md-12 mt-5">
          <div style="margin: auto; max-width: 1200px">
            <h1 class="text-warning d-flex justify-content-center">
              Cryptocurrency Prices
            </h1>

            <TableCoinBasic class="mt-3"></TableCoinBasic>

            <!-- <TableCoinPro v-if="getPlanId === 2"></TableCoinPro>

          <TableCoinExpert v-if="getPlanId === 3"></TableCoinExpert> -->

            <nav v-if="getPlanId === 1 || getPlanId === ''">
              <ul class="pagination d-flex justify-content-center">
                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationPrevious(getCurrentPage)"
                  >Previous</a
                >
              </li> -->
                <div v-for="n in 1" :key="n" @click.prevent="getPagination(n)">
                  <li class="page-item ml-3 mt-3">
                    <a class="page-link text-dark" href="#">{{ n }}</a>
                  </li>
                </div>
                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationNext(getCurrentPage)"
                  >Next</a
                >
              </li> -->
              </ul>
            </nav>

            <nav v-if="getPlanId === 2">
              <ul class="pagination d-flex justify-content-center">
                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationPrevious(getCurrentPage)"
                  >Previous</a
                >
              </li> -->
                <div v-for="n in 5" :key="n" @click.prevent="getPagination(n)">
                  <li class="page-item ml-3">
                    <a class="page-link text-dark mt-3" href="#">{{ n }}</a>
                  </li>
                </div>
                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationNext(getCurrentPage)"
                  >Next</a
                >
              </li> -->
              </ul>
            </nav>

            <nav v-if="getPlanId === 3">
              <ul class="pagination d-flex justify-content-center">
                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationPrevious(getCurrentPage)"
                  >Previous</a
                >
              </li> -->
                <div v-for="n in 10" :key="n">
                  <li class="page-item ml-3" @click.prevent="getPagination(n)">
                    <a class="page-link text-dark mt-3" href="#">{{ n }}</a>
                  </li>
                </div>

                <!-- <li class="page-item">
                <a
                  class="page-link text-dark"
                  href="#"
                  @click.prevent="getPaginationNext(getCurrentPage)"
                  >Next</a
                >
              </li> -->
              </ul>
            </nav>

            <div class="row mt-5">
              <div class="col-md-12">
                <h1 class="text-warning text-center">Subscription Plan</h1>
                <PlanCard class="mt-5"></PlanCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";
import PlanCard from "../components/PlanCard.vue";
import TableCoinBasic from "../components/TableCoinBasic.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "HomePage",
  computed: {
    getPlanId() {
      return this.$store.state.PlanId;
    },
    getCurrentPage() {
      return this.$store.state.currentPage;
    },
  },
  components: {
    CoinNavbar,
    PlanCard,
    TableCoinBasic,
    HFooter,
    // TableCoinPro,
    // TableCoinExpert,
  },
  methods: {
    getPagination(page) {
      const payload = {
        page: page,
      };
      this.$store.dispatch("getPagination", payload);
    },
    created() {
      this.$store.dispatch("getBasicTable");
    },
  },
};
</script>

<style>
</style>