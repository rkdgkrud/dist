
const express = require('express');
const cors = require('cors'); // cors 미들웨어 추가
const app = express();
const port = 3000;

// 예제 주식 데이터
const stocks = [
  { id: 1, name: 'AAPL', price: 150 },
  { id: 2, name: 'GOOGL', price: 2800 },
  // Add more stocks as needed
];

// cors 미들웨어를 추가하여 모든 도메인에서의 요청을 허용합니다.
app.use(cors());

// 주식 데이터를 반환하는 API 엔드포인트
app.get('/api/stocks', (req, res) => {
  res.json(stocks);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});