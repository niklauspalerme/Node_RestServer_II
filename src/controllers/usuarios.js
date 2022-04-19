/////////////////////////////////////////////////////////////
// Importaciones

const { response, request } = require('express');
const { Usuarios } = require('../models/usuario');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');



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

//POST /api/usuarios
const usuarioPost = async(req, res) => {

    console.log("POST /api/usuarios");


    const { nombre, correo, password, rol } = req.body
    const usuarioObj = {
        nombre,
        correo,
        password,
        rol
    }


    //Encrypt
    const salt = bcryptjs.genSaltSync();
    usuarioObj.password = bcryptjs.hashSync(password, salt);

    const usuario = new Usuarios(usuarioObj);
    await usuario.save();

    res.status(201).json({
        "Message": "POST /usuarios",
        usuario
    });
}


//PUT /api/usuarios/:id
const usuarioPut = async(req = request, res) => {

    console.log("PUT /api/usuarios/:id");

    const id = req.params.id;
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
        //Encrypt
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuarioDB = await Usuarios.findByIdAndUpdate(id, resto)


    res.status(200).json({
        "Message": "Put Mil Fleurs",
        usuarioDB
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