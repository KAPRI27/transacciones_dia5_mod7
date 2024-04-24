Probando conexión - Ejercicio Guiado

Crear un archivo nuevo llamado “consultas.js”, en donde escribiremos una función asíncrona que al ser ejecutada realice una consulta SQL con la instrucción “SELECT NOW()”, la cual recordemos procesa una petición al motor de base de datos, que devuelve un dato de tipo Date con la fecha actual.
Prosigue los siguientes pasos para la realización de este ejercicio:
 
 ● Paso 1: Importar el paquete pg y crear una instancia de la clase Pool, definiendo las propiedades básicas para una consulta. No es necesario definir ninguna base de datos.

 ● Paso 2: Crear una función asíncrona que devuelva el objeto result de una consulta SQL con la instrucción “SELECT NOW()”.

 ● Paso 3: Exportar un módulo en forma de objeto que contenga la función asíncrona creada en el paso anterior.

 ***PARA QUE FUNCIONE***
 Reemplaza 
 'database' por el nombre de la base de datos que quieres probar
 'user' por el nombre de usuario de tu postgresSQL
 'password' por la password que utilizas en postgresSQL

 Luego corre en la terminal la siguiente instrucción:
 node index.js

 y en el servidor aparecerá el json obtenido, haz click en el cuadro superior para darle formato JSON

