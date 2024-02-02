<!-- src/App.vue -->

<template>
  <div id="app">
    <StockList />
  </div>
</template>

<script>
import StockList from './components/StockList.vue';

export default {
  components: {
    StockList
  }
};
</script>

<style>
/* Add styles if necessary */
</style>