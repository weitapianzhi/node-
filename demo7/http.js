var mysql = require('mysql');

//创建数据库连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '405994603',
  database : 'nodesql'
});
 //连接数据库
connection.connect();
 
//开始查询
connection.query('select * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].name);
});

//结束连接
connection.end();
