<template>
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

    <div class="row" style="margin: auto; max-width: 1200px">
      <div class="col-md-12 mt-5">
        <label class="text-warning font-weight-bold"> Card Number </label>
        <input
          class="form-control"
          type="text"
          placeholder="Readonly input here..."
          readonly
        />
        <label class="text-warning font-weight-bold"> Card Number </label>
        <input
          class="form-control"
          type="text"
          placeholder="Readonly input here..."
          readonly
        />
        <label class="text-warning font-weight-bold"> Card Number </label>
        <input
          class="form-control"
          type="text"
          placeholder="Readonly input here..."
          readonly
        />
      </div>
    </div>

    <div class="row mt-5" style="margin: auto; max-width: 1200px">
      <div class="col-md-12">
        <SubscribeCard></SubscribeCard>
      </div>
    </div>
  </div>
</template>

<script>
import CoinNavbar from "../components/CoinNavbar.vue";
import { StripeElementCard } from "@vue-stripe/vue-stripe";
import SubscribeCard from "../components/SubscribeCard.vue";
export default {
  name: "ProfilePage",
  data() {
    this.publishableKey =
      "pk_test_51KZVEYFHOJ7vfyPM6Qlo6xpOTAIypvMrupP8sIPNJz7eLS74eeHWCf1kSPRdzgBMA9rc83AChLyT83TtS6hXI2pu00wx8bSSxA";
    return {
      token: null,
    };
  },
  components: { CoinNavbar, StripeElementCard, SubscribeCard },
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