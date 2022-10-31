// import { Persona } from "./persona.model.js";
import { Usuario } from "./usuario-model.js";
import { Rol } from "./rol-model.js";
import { Usuario_Rol } from "./usuario_rol-model.js";
// import { Tarea } from "./tarea.model.js";
// import { Materia } from "./materia.model.js";
// import { PersonasMaterias } from "// ./personas-materias.model.js";

// Relaciones de cuentas
// Usuario.hasMany(Cuenta);
// Cuenta.belongsTo(Persona);

// Relaciones de tareas
// Persona.hasMany(Tarea);
// Tarea.belongsTo(Persona);

// Relaciones de personas_materias
// Persona.belongsToMany(Materia, { through: PersonasMaterias });
// Materia.belongsToMany(Persona, { through: PersonasMaterias });

Usuario.belongsToMany(Rol, { through: Usuario_Rol });
Rol.belongsToMany(Usuario, { through: Usuario_Rol });

// export { Persona, Cuenta, Tarea, Materia, PersonasMaterias };
export { Usuario, Rol, Usuario_Rol };
