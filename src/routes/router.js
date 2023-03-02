const express = require("express")
const router = express.Router()
const userController = require('../controllers/user')
const atividadeController = require('../controllers/atividade')
const cadastroAtividadeController = require('../controllers/cadastraAtividade')
const jwt = require('jsonwebtoken')
const SECRET = 'tpinterdisciplinarbsi2023'
const cors = require('cors');

router.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

router.post("/register", (req, res) => {
    console.log(req)
    return res.json({sucess: "ok"})
})
router.get('/users', (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    userController.getUsers().then((users) => {
        res.setHeader('content-type', 'application/json');
        res.json(users)
    })
        .catch((err) => {
            console.log('Erro na consulta', JSON.stringify(err))
            return res.json(err)
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
            res.json({ auth: true, user: resp.user, token: token })
        } else {
            res.status(401).end()
        }
    }).catch((err) => {
        return res.json(err)
    })
})

router.post('/atividade', (req, res, next) => {
    console.log("NOVA ATIVIDADE")
    atividadeController.createAtividade(req.body).then((ativ) => {
        cadastroAtividadeController.createCadastroAtividade({
            id_user: req.body.userId,
            id_atividade: ativ.id
        }).then((cadastro) => {
            res.json({sucess: true, mensagem: "Atividade cadastrada com sucesso", ativ: ativ, cadastro: cadastro})
        })
    }).catch((err) => {
        res.json(err)
    })

})

module.exports = router


