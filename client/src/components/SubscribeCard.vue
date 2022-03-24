<template>
  <div class="container">
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm">
        <div class="card-header bg-warning">
          <h4 class="my-0 font-weight-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            $ 0 <small class="text-muted">/ Monthly</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Top 10 Coin</li>

            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button
            v-if="isCardSaved === true && userPlanType !== 1"
            @click.prevent="checkoutHandler(1)"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
          >
            Get Started
          </button>
          <button
            v-if="isCardSaved === false || userPlanType === 1"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
            disabled
          >
            Get Started
          </button>
        </div>
      </div>

      <div class="card mb-4 shadow-sm">
        <div class="card-header bg-warning">
          <h4 class="my-0 font-weight-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            $5 <small class="text-muted">/ Monthly</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Top 100 Coin</li>

            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button
            v-if="isCardSaved === true && userPlanType !== 2"
            @click.prevent="checkoutHandler(2)"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
          >
            Get Started
          </button>
          <button
            v-if="isCardSaved === false || userPlanType === 2"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
            disabled
          >
            Get Started
          </button>
        </div>
      </div>

      <div class="card mb-4 shadow-sm">
        <div class="card-header bg-warning">
          <h4 class="my-0 font-weight-normal">Expert</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            $10 <small class="text-muted">/ Monthly</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>All Coin listed</li>

            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button
            v-if="isCardSaved === true && userPlanType !== 3"
            @click.prevent="checkoutHandler(3)"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
          >
            Get Started
          </button>
          <button
            v-if="isCardSaved === false || userPlanType === 3"
            type="button"
            class="btn btn-lg btn-block btn-outline-dark bg-warning text-dark"
            disabled
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscribePlan",
  computed: {
    isCardSaved() {
      return this.$store.state.isCardSaved;
    },
    userPlanType() {
      return this.$store.state.PlanId;
    },
  },
  methods: {
    checkoutHandler(input) {
      const payload = {
        PlanId: input,
      };
      this.$store.dispatch("changePlan", payload);
    },
  },
};
</script>

<style>
</style>