/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Roles } = require("../models/role");


/////////////////////////////////////////////////////////////
// Función

const esRoleValido = async(rol = '') => {
    const exisRol = await Roles.findOne({ rol });

    if (!exisRol) {
        throw new Error(`The rol ${rol}, it doesnt exist on the DB`);
    }
}




/////////////////////////////////////////////////////////////
// Exportamos

module.exports = {
    esRoleValido
}