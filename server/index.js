const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const User = require('./User');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

// User

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: id } });
    res.send(user);
});

app.post('/users', async (req, res) => {
    await User.create(req.body);
    res.send('Usuário criado com sucesso');
});

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } })
    user.firstname = req.body.firstname;
    await user.save();
    res.send('Usuário atualizado com sucesso');
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.send('Usuário deletado com sucesso');
});

app.listen(3001, () => {
    console.log('app is running');
})
