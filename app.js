const express = require('express')
const routes = require('./src/routes')

class App {
	constructor()
	{
		this.express = express();
		this.express.use(express.json());


		this.express.use(express.urlencoded({ extended: false }));
		this.express.use(express.static('public'));
		this.express.set('view engine', 'html');
		this.express.set('views', 'views');

		const nunjucks = require("nunjucks");
		nunjucks.configure("./views", {
		    express: this.express,
		    noCache: true
		})

		this.routes();
	}

	routes()
	{
		this.express.use(routes)
	}

}

module.exports = new App().express;