const { Users } = require('../models');

class UserController {

    async list(req, res) {
        try {
            const users = await Users.findAll();

            return res.render('index', { donors: users })
        } catch (err) 
        {
            return res.status(400).json({ error: err.message });
        }
    }

    async store(req, res) {
        try {

            const user = await Users.create(req.body);
            
            return res.redirect("/");
        } catch (err) 
        {
          return res.status(400).json({ error: err.message });
        }
    }

    async destroy(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);

            await user.destroy();

            return res.json();
        } catch (err) 
        {
            return res.status(400).json({ error: err.message });
        }
    }


}

module.exports = new UserController();