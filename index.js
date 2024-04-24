//SERVIDOS EXPRESS
const { getDate } = require("./consultas");
//Importar Express y levantar un servidor en el puerto 3000.
const express = require ('express');
const app = express();
//Importar la función asíncrona getDate del archivo “consultas.js”.

app.listen(3000, console.log("server ON"))

/*
//Crea una ruta raíz / GET.
app.get("/", (req, res) => {
	res.send("Servidor funcionando =D !");
})
*/



//MODIFICAMOS LA RUTA RAIZ "/"
//Dentro de la ruta raíz, almacenaremos en una constante el resultado de la función asíncrona importada.
app.get("/", async (req, res) => {
	//res.send("Servidor funcionando =D !");
    const result = await getDate();

    //Devolver al cliente a través del método “json()” del parámetro “res” un JSON con el objeto result que es la respuesta de la función asíncrona.
    res.json(result);
})


//Ahora abre tu navegador y entra al servidor. Deberás recibir algo como la imagen_1 

//Ahí lo tenemos, estamos recibiendo el objeto result enviado desde PostgreSQL a nuestro servidor, disponibilizado a través de la ruta raíz. Con esto has logrado un importante paso, porque podremos de ahora en adelante utilizar los mecanismos de un servidor con Express, para programar una API REST y ofrecerle a un cliente los métodos para la gestión de datos en nuestras bases de datos.