var mysql = require ('mysql');

//buat koneksi database
const conn = mysql.CreateConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'restapi'
});

conn.connect((err)=>{
	if(err) throw err;
	console.log('Mysql terkoneksi');
});


module.exports = conn;