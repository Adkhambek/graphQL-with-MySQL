const mysql = require("mysql2/promise");
const { configDB } = require("../config");

const fetchAll = async (sql, ...values) => {
  const connection = await mysql.createConnection(configDB);
  try {
    const [rows] = await connection.execute(sql, values ? values : null);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    connection.end();
  }
};

module.exports = fetchAll;
