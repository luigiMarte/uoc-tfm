
// Shema para definir lo que vamos a guardar en la BD
// modelo para poder hacer consultas desde el código
import {Schema , model} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        // sirve para eliminar espacios
        trim: true
    },
    alias: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    },
    img:{
        type: String,
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE','PILOT_ROLE' ]
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: Boolean,
        // Default si no la paso desde el front añade automaticamente
        default: true
    }
}, 
{   
    // si no quieres que mongoose añada automaticamente el versionKey
    versionKey: false,
},
)

export default model('User', userSchema);
// mongoose añade automáticamente a la colección una s al final. user -> users