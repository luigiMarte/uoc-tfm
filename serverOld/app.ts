// import * as dotenv from 'dotenv';
// dotenv.config();
import  express  from "express";
import morgan from "morgan";
import cors from "cors";

import userRoutes from './routes/users'

const app = express();

console.log(process.env.MONGODB_ATLAS);

app.use(morgan("dev"));
app.use(cors());
// ya viene con express. Permite al back entender json enviado desde front.
app.use(express.json());

app.use('/api', userRoutes);

console.log(process.env) ;


export default app;