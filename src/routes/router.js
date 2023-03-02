const express = require("express")
const router = express.Router()
const userController = require('../controllers/user')
const atividadeController = require('../controllers/atividade')
const cadastroAtividadeController = require('../controllers/cadastraAtividade')
const avaliaAtividadeController = require('../controllers/avaliaAtividade')
const jwt = require('jsonwebtoken')
const SECRET = 'tpinterdisciplinarbsi2023'
const cors = require('cors');

router.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

router.post("/register", (req, res) => {
    console.log("CHEGUEIIIII")
    userController.createUser({
        RA: req.body.RA,
        nome: req.body.nome,
        curso: req.body.curso,
        dataNasc: req.body.dataNasc,
        email: req.body.email,
        telefone: req.body.telefone,
        password: req.body.password,
        user_type: 0

    }).then((login) => res.json(login))
        .catch((err) => {
            return res.status(400).json(err)
        })
})

router.get('/users', (req, res, next) => {
    userController.getUsers().then((users) => res.json(users))
        .catch((err) => {
            return res.status(400).json(err)
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
            const token = jwt.sign({ user_id: resp.user.id }, SECRET, { expiresIn: 1900 })
            res.json({ auth: true, user: resp.user, token: token })
        } else {
            res.status(401).end()
        }
    }).catch((err) => {
        return res.json(err)
    })
})

router.post('/atividade', (req, res, next) => {

    atividadeController.createAtividade(req.body).then((ativ) => {
        cadastroAtividadeController.createCadastroAtividade({
            id_user: req.body.user_id,
            id_atividade: ativ.id
        }).then((cadastro) => {
            res.json({ sucess: true, mensagem: "Atividade cadastrada com sucesso", ativ: ativ, cadastro: cadastro })
        })
    }).catch((err) => {
        res.json(err)
    })

})
router.post('/avalia_atividade', (req, res, next) => {
    avaliaAtividadeController.createAvaliaAtividade(req.body).then(() => { 
        atividadeController.updateStatusAtividade({ status: req.body.avaliacao, id_atividade: req.body.id_atividade }) }).then((avaliada) => {
        res.json(avaliada)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router


