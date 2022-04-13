/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Router } = require("express");
const { check } = require("express-validator");
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete, usuarioPath } = require("../controllers/usuarios");
const router = Router();


/////////////////////////////////////////////////////////////
// Implementación


router.get('/', usuarioGet);

router.post('/', [
    check('nombre', 'The name is empty').not().isEmpty(),
    check('correo', 'The email is invalid').isEmail()
], usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPath);



/////////////////////////////////////////////////////////////
// Exportamos

module.exports = router