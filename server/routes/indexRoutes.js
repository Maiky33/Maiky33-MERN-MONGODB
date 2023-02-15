const express = require('express')
const router = express.Router();


//hacemos esta ruta para enviar la ventana principal
router.get('/', (req, res, next) => { })

//SINGUP
//hacemos esta ruta para enviar la ventana registrar
router.get('/singup', (req, res, next) => {})

//hacemos esta ruta para resibir los datos
router.post('/signup', (req, res, next) => { 
    console.log(req.body);
    res.send('resivido')
})


//SINGIN//
//hacemos esta ruta para enviar la ventana registrar
router.get('/singin', (req, res, next) => {})
//hacemos esta ruta para resibir los datos
router.post('/singin', (req, res, next) => {})



module.exports = router