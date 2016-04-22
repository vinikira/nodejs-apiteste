'use strict';
module.exports = (app) => {
	const usuarioController = app.controllers.usuarioController;
	app.get('/users', usuarioController.index);
	app.get('/users/:id', usuarioController.buscar);
	app.post('/users', usuarioController.cadastrar);
	app.put('/users/:id', usuarioController.alterar);
	app.delete('/users/:id', usuarioController.deletar);
}
