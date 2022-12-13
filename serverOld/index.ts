import app from './app';
//import {startConnection} from "./database"
import {dbConnection} from "./database/config"

// primero conecto a la base de datos
//startConnection();
dbConnection()
// Luego inicio el servidor
app.listen(3000)
console.log('Server listening on port 3000')