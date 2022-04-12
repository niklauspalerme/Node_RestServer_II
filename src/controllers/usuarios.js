/////////////////////////////////////////////////////////////
// Importaciones

const { response, request } = require('express');
const { Usuarios } = require('../models/usuario');


/////////////////////////////////////////////////////////////
// Funciones Controllers de Usuario

const usuarioGet = (req = request, res = response) => {

    const { q = '', nombre = 'No Name', page = '0', limit = '1' } = req.query




    res.status(200).json({
        "Message": "Mil Fleurs",
        q,
        nombre,
        page,
        limit
    });
}


const usuarioPost = async(req, res) => {


    const usuario = new Usuarios(req.body);
    await usuario.save();


    res.status(201).json({
        "Message": "POST /usuarios",
        usuario
    });
}

const usuarioPut = (req = request, res) => {


    const id = req.params.id;


    res.status(500).json({
        "Message": "Put Mil Fleurs",
        id
    });
}

const usuarioDelete = (req, res) => {


    res.status(200).json({ "Message": "Delete Mil Fleurs" });
}

const usuarioPath = (req, res) => {
    res.json({ "Message": "Patch v Mil Fleurs" });
}


/////////////////////////////////////////////////////////////
// Exportaciones

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPath
}