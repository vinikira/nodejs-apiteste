'use strict';
module.exports = (app) =>{
	const Usuario = require('../models/usuario');
	let userController = {
		index: (req, res) => {
			Usuario.find((err, data)=>{
				if(err) return console.log(err);
				return res.json(data);
			});
		}, 
		cadastrar: (req, res) =>{
			let novoUsuario = new Usuario();
			if(!req.body.nome || !req.body.nome || !req.body.nome){
				return res.json({msg: "Digite todos os campos corretamente."});
			}else{
				novoUsuario.nome = req.body.nome;
				novoUsuario.email = req.body.email;
				novoUsuario.senha = req.body.senha;
				novoUsuario.save((err, data)=>{
					res.json(data);
				});				
			}
		},
		buscar: (req, res) => {
			let id = req.params.id;
			Usuario.findOne({"_id": id}, (err, data)=>{
				if(err) res.json(err);
				return res.json(data);
			});
		},
		alterar: (req, res) => {
		    let id = req.params.id;
		    let alt = {nome: req.body.nome, email: req.body.email};
		    Usuario.put({"_id": id}, alt, (err, data)=>{
		    	if(err) res.json(err);
		    	return res.json(data);
		    });

		},
		deletar: (req, res) => {
		    let id = req.params.id;
		    Usuario.delete({"_id": id}, (err, data)=>{
		    	if(err) res.json(err);
		    	return res.json(data);
		    });

		}
	}

	return userController;
}