/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Router } = require("express");
const { check } = require('express-validator');
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete, usuarioPath } = require("../controllers/usuarios");
const { validarCampos, validarEmailRepetido } = require("../middlewares/validar-campos");
const router = Router();


/////////////////////////////////////////////////////////////
// Implementación


router.get('/', usuarioGet);

router.post('/',
    check('nombre', 'The name is empty').not().isEmpty(),
    check('correo', 'The email is invalid').isEmail(),
    check('password', 'The password must be more 6 characters').isLength({ min: 6 }),
    check('rol', 'The roll is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos,
    validarEmailRepetido,
    usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPath);



/////////////////////////////////////////////////////////////
// Exportamos

module.exports = router