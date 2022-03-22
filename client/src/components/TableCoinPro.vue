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
      <TableRow></TableRow>
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";
export default {
  name: "TableCoinPro",
  components: { TableRow },
};
</script>

<style>
</style>