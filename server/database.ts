import mysql from 'promise-mysql';
import keys from  './keys';

//comenzamos a abrir la conexion
const pool=mysql.createPool(keys.database);

pool.getConnection()
        .then (connection => {
           pool.releaseConnection(connection);
           console.log('DB is connected');
        });

export default pool;//exporto la conexión para que sea usada 