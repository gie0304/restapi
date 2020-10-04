'use strict';

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function(req, res){
	response.ok("aplikasi berjalan..!",res)
}

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
	connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
		if(error){
			connection.log(error);
		}else {
			response.ok(rows, res)
		}
	});
};