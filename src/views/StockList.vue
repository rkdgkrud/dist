<!-- src/components/StockList.vue -->

<template>
  <div>
    <h2>Stock List</h2>
    <button @click="showStockPrices">주식가격 확인</button>
    <table v-if="showTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>종목명</th>
          <th>주식가격</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock.id">
          <td>{{ stock.id }}</td>
          <td>{{ stock.name }}</td>
          <td>{{ stock.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stocks: [],
      showTable: false
    };
  },
  methods: {
    showStockPrices() {
      // 버튼 클릭 시 주식 데이터 다시 가져오기
      axios.get('http://localhost:3000/stocks')
        .then(response => {
          this.stocks = response.data;
          this.showTable = true;
        })
        .catch(error => {
          console.error('Error fetching stocks:', error);
        });
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>