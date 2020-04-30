const mysql      = require('mysql');
const connection = mysql.createConnection({
  //host     : '192.168.0.37',
  host     : '127.0.0.1',
  //host     : '130.211.135.78',
  user     : 'root',
  password : '',
  database : 'dentalCM',
  port     : 3306,
  multipleStatements: true
  
  //port: 3307
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
module.exports = connection;