// server.js
const express = require('express');
const cors = require('cors');
const oracleDbModule = require('./oracleDbModule');
const app = express();
const port = 3000;


// CORS 설정
app.use(cors());

app.get('/stocks', async (req, res) => {
  let connection;

  try {
    connection = await oracleDbModule.getConnection();

    // 여기에서 SQL 쿼리 또는 작업을 수행합니다.
    // 예시: SELECT * FROM stocks;
    // const result = await connection.execute('SELECT * FROM stocks');

    res.send('Stocks data retrieved successfully!');
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      await oracleDbModule.closeConnection(connection);
    }
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});