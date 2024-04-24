
//Importar el paquete pg 
const { Pool } = require("pg");
//Crear una instancia de la clase Pool, definiendo las propiedades básicas para una consulta. No es necesario definir ninguna base de datos.

const pool = new Pool({
    database: "postgres",
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
})

//Crear una función asíncrona que devuelva el objeto result de una consulta SQL con la instrucción “SELECT NOW()”.
const getDate = async () => {
    //creamos la const result para guardar la respuesta de la consulta
    const result = await pool.query("SELECT NOW()");
    //retornamos la respuesta de la consulta llamando a la variable result
    return result;
}


// Exportamos un módulo en forma de objeto que contenga la función asíncrona creada en el paso anterior.
module.exports = { getDate };

