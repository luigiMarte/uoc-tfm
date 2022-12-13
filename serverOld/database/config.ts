import { connect } from "mongoose";

export const dbConnection = async() => {
    try {
        await connect('mongodb+srv://main_user:5TDz0sE3kyiIE1zR@cluster0.xgbqbgq.mongodb.net/dronesDB?',{
            // mongoose recomienda usar ciertos objetos, xa poder usar funciones obsoletas
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
        } );
        console.log('DB connected')
    } catch (err) {
        console.log(err);
        throw new Error('DB when init DB')
    }
}


// import { connect } from "mongoose";

// export const startConnection = async () => {
//     try {
//     // Dirección de la BD
//     const db = await connect("mongodb+srv://main_user:5TDz0sE3kyiIE1zR@cluster0.xgbqbgq.mongodb.net/dronesDB");
//     console.log(db)
//     } catch (error) {
//         console.error(error);
//     } 
// }
