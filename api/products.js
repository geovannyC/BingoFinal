const express = require('express');
const router = express.Router();
const rec = require('../js/bingo')
const lanzar = require('../js/lanzar');
const insertar = require('../script')

router.get('/index', (req, res, next) =>{
    
    res.status(200)

    
});
router.get('/', (req, res, next) =>{
    
    res.status(200).json(JSON.stringify(rec.exportar()))
    insertar.insertUsr();
    
});
router.get('/lanzar', (req, res, next) =>{
    res.status(200).json(JSON.stringify(lanzar.exportar()));
    insertar.actualizaUsr();
    
});
router.get('/lanzados', (req, res, next) =>{
    
    res.status(200).json(lanzar.exportar2());
    
});
module.exports = router;