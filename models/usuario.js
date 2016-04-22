'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Usuario = new Schema({
	nome: String,
	email: String,
	senha: String,
	creat_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('usuario', Usuario);