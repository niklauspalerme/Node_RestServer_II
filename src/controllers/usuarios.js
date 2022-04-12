/////////////////////////////////////////////////////////////
// Importaciones

const {response, request} = require('express');


/////////////////////////////////////////////////////////////
// Funciones Controllers de Usuario

const usuarioGet = (req = request , res = response ) =>  {

    const {q ='', nombre = 'No Name', page = '0', limit = '1'} = req.query




    res.status(200).json({
        "Message": "Mil Fleurs",
        q,
        nombre,
        page,
        limit
    });
}


const usuarioPost = (req, res) =>  {

    const {nombre, edad} = req.body

    res.status(201).json({
        "Message": "Post Mil Fleurs",
        "Nombre": nombre,
        "Edad": edad
    });
}

const usuarioPut =  (req = request, res) =>  {

    
    const id = req.params.id;


    res.status(500).json({
        "Message": "Put Mil Fleurs",
        id
    });
}

const usuarioDelete = (req, res) =>  {


    res.status(200).json({"Message": "Delete Mil Fleurs"});
}

const usuarioPath = (req, res) =>  {
    res.json({"Message": "Patch v Mil Fleurs"});
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