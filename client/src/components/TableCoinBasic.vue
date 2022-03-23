<template>
  <table
    class="table rounded bg-light"
    style="margin-left: auto; margin-right: auto"
  >
    <thead class="bg-warning">
      <tr>
        <th>Coin</th>
        <th>Price</th>
        <th>24h Change</th>
        <th>Market Cap</th>
        <th>Chart</th>
      </tr>
    </thead>
    <tbody v-for="coin in getTableBasic" v-bind:key="coin.id">
      <TableRow :coin="coin"> </TableRow>
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";
export default {
  name: "TableCoinBasic",
  components: { TableRow },
  computed: {
    getTableBasic() {
      return this.$store.state.basicTable;
    },
  },
  created() {
    this.$store.dispatch("getBasicTable");
  },
};
</script>

<style>
</style>