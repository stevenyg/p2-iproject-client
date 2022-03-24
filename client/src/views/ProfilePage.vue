<template>
  <div>
    <div>
      <CoinNavbar></CoinNavbar>

      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <h1 class="text-warning font-weight-bold">Profile</h1>
        </div>
      </div>
      <div class="row mt-5" style="margin: auto; max-width: 1200px">
        <div class="col-md-10">
          <stripe-element-card
            ref="elementRef"
            :pk="publishableKey"
            @token="tokenCreated"
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-warning" @click="submit">
            Save Credit Card
          </button>
        </div>
      </div>

      <div class="row mb-5" style="margin: auto; max-width: 1200px">
        <div class="col-md-4">
          <label class="text-warning font-weight-bold mt-5">
            Card Number
          </label>
          <input
            :placeholder="getCreditCard.last4"
            class="form-control mt-3"
            type="text"
            readonly
          />
        </div>
        <div class="col-md-4">
          <label class="text-warning font-weight-bold mt-5">
            Expire Month
          </label>
          <input
            :placeholder="getCreditCard.exp_month"
            class="form-control mt-3"
            type="text"
            readonly
          />
        </div>
        <div class="col-md-4">
          <label class="text-warning font-weight-bold mt-5">
            Expire Year
          </label>
          <input
            :placeholder="getCreditCard.exp_year"
            class="form-control mt-3"
            type="text"
            readonly
          />
        </div>
      </div>

      <div class="row mt-5" style="margin: auto; max-width: 1200px">
        <div class="col-md-12">
          <h1 class="text-center text-warning">Subscribtion Plan</h1>
          <SubscribeCard class="mt-5"></SubscribeCard>
        </div>
      </div>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";
import { StripeElementCard } from "@vue-stripe/vue-stripe";
import SubscribeCard from "../components/SubscribeCard.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "ProfilePage",
  data() {
    this.publishableKey =
      "pk_test_51KZVEYFHOJ7vfyPM6Qlo6xpOTAIypvMrupP8sIPNJz7eLS74eeHWCf1kSPRdzgBMA9rc83AChLyT83TtS6hXI2pu00wx8bSSxA";
    return {
      token: null,
    };
  },
  components: { CoinNavbar, StripeElementCard, SubscribeCard, HFooter },
  computed: {
    getCreditCard() {
      return this.$store.state.creditCard;
    },
  },
  methods: {
    submit() {
      // this will trigger the process
      this.$refs.elementRef.submit();
    },
    tokenCreated(token) {
      const payload = {
        token: token,
        email: this.$store.state.email,
      };
      this.$store.dispatch("sendTokenToServer", payload);
      // handle the token
      // send it to your server
    },
  },
};
</script>

<style>
</style>