import userSchema from "../models/Users"
import {Router} from "express";

const router = Router();

const getUsers = router.get('/users', async (req, res) => {
    // hacemos consulta a base de datos
    const users = await userSchema.find();
    console.log(users)
    // aquí devolvemos la respuesta, puede ser string, o lo que venga de la base de datos
    res.send(users)
});


// const usersGet = async(req = Request, res = Response) => {

//     const { limite = 5, desde = 0 } = req.query;
//     const query = { estado: true };

//     const [ total, usuarios ] = await Promise.all([
//         userSchema.countDocuments(query),
//         userSchema.find(query)
//             .skip( Number( desde ) )
//             .limit(Number( limite ))
//     ]);

//     res.json({
//         total,
//         userSchema
//     });
// }

export default getUsers
