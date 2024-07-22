import mongoose from "mongoose";

const PublicationSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {  
        type: String,
        required: true
    },
    mision: {
        type: String,
        required: true
    },
    comoDonar: {
        type: String,
        //required: true
    },
    comoAyudar: {
        type: String,
        //required: true
    },
    linkDonacion: {
        type: String,
        //required: true
    },
    imagenPrincipal: {
        type: String,
        //required: true
    },
    imagenes: {
        type: Array,
        //required: true
    },
    caracteristicasPrincipales: {
        type: String,
        //required: true
    },
    caracteristicasSecundarias: {
        type: String,
        //required: true
    },
    comentarios: [{
        nombre: {
            type: String,
            required: true
        },
        comentario: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            default: Date.now
        }
    }]
});

export default mongoose.model('Publication', PublicationSchema);