const { validationResult } = require('express-validator');
const { Usuarios } = require('../models/usuario');



const validarCampos = (req, res, next) => {

    //Validamos con el express-validator los atributos
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next();

}

const validarEmailRepetido = async(req, res, next) => {

    //Validamos Correo

    const correo = req.body.correo

    const existEmail = await Usuarios.findOne({ correo });
    if (existEmail) {
        return res.status(400).json({
            msg: "The email exist. Please try with another one"
        })
    }

    next();
}

module.exports = {
    validarCampos,
    validarEmailRepetido
}