'use strict';

var reponse = reruire('./rest');
var connection = require('./koneksi');

exports.index = function(req, res){
	reponse.ok("aplikasi berjalan..!")
}