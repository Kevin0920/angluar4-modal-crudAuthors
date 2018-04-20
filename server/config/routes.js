var mainroutes = require('../controllers/mainControl.js');
var path = require('path');


module.exports = function(app){
    app.post('/authors', (req, res, next) => {
        mainroutes.createAuthor(req, res);
    });

    app.get('/authors', (req, res, next) => {
        mainroutes.getAllAuthors(req, res);
    });

    app.delete('/authors/:id', (req, res, next) => {
        mainroutes.delete(req, res);
    })

    app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	});
}