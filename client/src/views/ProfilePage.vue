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
    <!-- <div class="">
      <div class="row">
        <div class="col-md-6 px-5 mt-5">
          <form action="">
            <div class="form-group">
              <label class="text-warning font-weight-bold" for="cc_name"
                >Email :
              </label>
              <input
                v-model="email"
                type="text"
                class="form-control"
                id="cc_name"
                pattern="\w+ \w+.*"
                title="First and last name"
                required="required"
                placeholder="test@gmail.com"
                readonly
              />
            </div>
          </form>
        </div>
        <div class="col-md-6 px-5 mt-5">
          <form @submit.prevent="cardSaveHandler" class="form" role="form" autocomplete="off">
            <div class="form-group">
              <label class="text-warning font-weight-bold" for="cc_name"
                >Card Holder's Name</label
              >
              <input
                v-model="cardHolderName"
                type="text"
                class="form-control"
                id="cc_name"
                pattern="\w+ \w+.*"
                title="First and last name"
                required="required"
              />
            </div>
            <div class="form-group">
              <label class="text-warning font-weight-bold">Card Number</label>
              <input
                v-model="cardNumber"
                type="text"
                class="form-control"
                autocomplete="off"
                maxlength="20"
                pattern="\d{16}"
                title="Credit card number"
                required=""
              />
            </div>
            <div class="form-group row">
              <label class="col-md-12 text-warning font-weight-bold"
                >Card Exp. Date</label
              >
              <div class="col-md-6">
                <input
                v-model="cardExpiry"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  maxlength="3"
                  pattern="\d{3}"
                  title="Three digits at back of your card"
                  required=""
                  placeholder="MM/YY"
                />
              </div>
              <div class="col-md-6">
                <input
                v-model="cardCVC"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  maxlength="3"
                  pattern="\d{3}"
                  title="Three digits at back of your card"
                  required=""
                  placeholder="CVC"
                />
              </div>
            </div>

            <hr />
            <div class="form-group row">
              <div class="col-md-6">
                <button type="submit" class="btn btn-success btn-lg btn-block">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> -->
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