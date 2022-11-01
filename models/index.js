// import { Persona } from "./persona.model.js";
import { Usuario } from "./usuario-model.js";
import { Rol } from "./rol-model.js";
import { Usuario_Rol } from "./usuario_rol-model.js";
import { Producto } from "./producto-model.js";
import { Stock } from "./stock-model.js";
import { Producto_Stock } from "./producto_stock-model.js";

Usuario.belongsToMany(Rol, { through: Usuario_Rol });
Rol.belongsToMany(Usuario, { through: Usuario_Rol });

Producto.belongsToMany(Stock, { through: Producto_Stock });
Stock.belongsToMany(Producto, { through: Producto_Stock });

export { Usuario, Rol, Usuario_Rol, Producto, Stock, Producto_Stock };
