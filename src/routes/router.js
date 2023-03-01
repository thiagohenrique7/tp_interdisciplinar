const express = require("express")
const router = express.Router()
const userController = require('../controllers/user')
const atividadeController = require('../controllers/atividade')
const cadastroAtividadeController = require('../controllers/cadastraAtividade')
const jwt = require('jsonwebtoken')
const SECRET = 'tpinterdisciplinarbsi2023'

router.post("/register", (req, res) => {
    userController.createUser({
        RA: req.body.RA,
        nome: req.body.nome,
        curso: req.body.curso,
        dataNasc: req.body.dataNasc,
        email: req.body.email,
        telefone: req.body.telefone,
        password: req.body.password,
        user_type: 0

    }).then((login) => res.send(login))
        .catch((err) => {
            console.log('Erro no cadastro do item', JSON.stringify(err))
            return res.status(400).send(err)
        })
})
router.get('/users', (req, res, next) => {
    userController.getUsers().then((users) => res.send(users))
        .catch((err) => {
            console.log('Erro na consulta', JSON.stringify(err))
            return res.send(err)
        });
});

router.post('/login', (req, res, next) => {
    console.log("LOGIN")
    userController.getUserLogin({
        user: req.body.user,
        password: req.body.password
    }).then((resp) => {
        if (resp.sucess == true) {
            console.log("SUCESS")
            const token = jwt.sign({ userId: resp.user.id }, SECRET, { expiresIn: 1800 })
            res.send({ auth: true, user: resp.user, token: token })
        } else {
            res.status(401).end()
        }
    }).catch((err) => {
        return res.send(err)
    })
})

router.post('/atividade', (req, res, next) => {
    console.log("NOVA ATIVIDADE")
    atividadeController.createAtividade(req.body).then((ativ) => {
        cadastroAtividadeController.createCadastroAtividade({
            id_user: req.body.userId,
            id_atividade: ativ.id
        }).then((cadastro) => {
            res.send({sucess: true, mensagem: "Atividade cadastrada com sucesso", ativ: ativ, cadastro: cadastro})
        })
    }).catch((err) => {
        res.send(err)
    })

})

module.exports = router


