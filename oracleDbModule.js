const oracledb = require('./node_modules/oracledb');
const dbConfig = require('./dbconfig.js');
oracledb.initOracleClient({ libDir: 'C:/Users/admin/Downloads/instantclient-basic-windows.x64-21.13.0.0.0dbru/instantclient_21_13' });
oracledb.autoCommit = true; // 자동 커밋


async function getConnection() {
  try {
    
    const connection = await oracledb.getConnection({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: `${process.env.HOST || 'localhost'}:1521/xe`
    });
    return connection;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

async function closeConnection(connection) {
  try {
    console.log('connect');
    await connection.close();
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

module.exports = {
  getConnection,
  closeConnection
};