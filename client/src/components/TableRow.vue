<template>
  <tr>
    <div class="d-flex" style="gap: 15px">
      <td><img :src="coin.image" style="height: 50px; width: 50px" /></td>
      <div class="d-flex flex-column mt-3">
        <span class="text-dark font-weight-bold text-uppercase">{{
          coin.symbol
        }}</span>
        <span class="text-dark font-weight-bold">{{ coin.name }}</span>
      </div>
    </div>
    <td>
      IDR
      {{
        new Intl.NumberFormat("id-ID", {
          currency: "IDR",
        }).format(Math.floor(coin.current_price))
      }}
    </td>
    <td
      class="font-weight-bold"
      :class="{
        'text-danger': coin.price_change_percentage_24h_in_currency < 0,
        'text-success': coin.price_change_percentage_24h_in_currency > 0,
      }"
    >
      {{ coin.price_change_percentage_24h_in_currency.toFixed(2) }}
    </td>
    <td class="font-weight-bold">
      IDR
      {{
        new Intl.NumberFormat("id-ID", {
          currency: "IDR",
        }).format(Math.floor(coin.market_cap / 1000000000000))
      }}
      B
    </td>
    <td>
      <router-link class="btn btn-dark text-warning"
        >Show Historycal Chart</router-link
      >
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["coin"],
};
</script>

<style>
</style>