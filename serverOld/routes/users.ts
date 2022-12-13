import {Router} from "express";
import userSchema from "../models/Users"
//import getUsers from "../controllers/users"

const router = Router();

//router.get('/', getUsers );
router.get('/users', async (req, res) => {
    // hacemos consulta a base de datos
    const users = await userSchema.find();
    console.log(users)
    // aquí devolvemos la respuesta, puede ser string, o lo que venga de la base de datos
    res.send(users)
});

router.get('/user/:id', async (req, res) => {
    // usamos la prop req.params de express
    try {
        const getUser = await userSchema.findById(req.params.id);
        if(!getUser) res.status(400).json({message: 'user not found'});
        res.send(getUser);
    } catch (error) {
        return res.status(500).send(error);
    }
    
});

    // POST :
    //el cliente siempre envia el req.body
    // puedo destructurar el req.body
    // paso los datos al modelo
    // lo guardo en la base de datos
    // devuelvo respuesta al front, puede ser en formato json
    //res.send(user);

router.post('/users', async (req, res) => {
    const {name, description} = req.body;
    const newUser = await new userSchema({name, description});
    await newUser.save()
    res.json(newUser);
    //res.send("post user")
});


router.delete('/user/:id', async (req, res) => {
    try {
        const deleteUser = await userSchema.findByIdAndDelete(req.params.id); 
        return res.json(deleteUser);
    } catch (error) {
        return res.status(500).send(error);
    }
    res.send("delete user")
});

router.put('/user/:id', async (req, res) => {
    const updatedUser = await userSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedUser)
});

export default router;