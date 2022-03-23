<template>
  <table
    class="table rounded bg-light"
    style="margin-left: auto; margin-right: auto"
  >
    <thead class="bg-warning">
      <tr>
        <th>#</th>
        <th>Coin</th>
        <th>Price</th>
        <th>24h Change</th>
        <th>Market Cap</th>
      </tr>
    </thead>
    <tbody>
          <tbody v-for="coin in getTablePro" v-bind:key="coin.id">
      <TableRow :coin="coin"> </TableRow>
    </tbody>
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";
export default {
  name: "TableCoinPro",
  components: { TableRow },
  //   computed: {
  //     getTablePro() {
  //       console.log(this.$store.state.proTable, 1);
  //       return this.$store.state.proTable;
  //     },
  //   },
  //   created() {
  //     this.$store.dispatch("getProTable");
  //   },
};
</script>

<style>
</style>