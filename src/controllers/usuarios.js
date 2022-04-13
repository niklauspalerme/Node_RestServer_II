/////////////////////////////////////////////////////////////
// Importaciones

const { response, request } = require('express');
const { Usuarios } = require('../models/usuario');
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


const usuarioPost = async(req, res) => {

    const { nombre, correo, password, rol } = req.body
    const usuarioObj = {
        nombre,
        correo,
        password,
        rol

    }

    //Validamos Correo
    const existEmail = await Usuarios.findOne({ correo });
    if (existEmail) {
        return res.status(400).json({
            msg: "The email exist. Please try with another one"
        })
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