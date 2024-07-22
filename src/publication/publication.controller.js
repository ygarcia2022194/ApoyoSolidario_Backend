import Publi from './publication.model.js'

import { response } from 'express'

export const postPublication = async (req, res) => {
    try {
        const { 
            nombre, 
            descripcion, 
            mision, 
            comoDonar, 
            comoAyudar, 
            linkDonacion, 
            imagenPrincipal, 
            imagenes, 
            caracteristicasPrincipales, 
            caracteristicasSecundarias, 
            comentarios 
        } = req.body;

        const newPublication = new Publi({
            nombre,
            descripcion,
            mision,
            comoDonar,
            comoAyudar,
            linkDonacion,
            imagenPrincipal,
            imagenes,
            caracteristicasPrincipales,
            caracteristicasSecundarias,
            comentarios
        });
        const savedPublication = await newPublication.save();
        res.status(201).json(savedPublication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*export const comprobarInformacion = async (req, res) => {
    const publications = await Publi.find();

    console.log("hola");
    if (publications.length === 0) {
        publiHuellitasAmati(res);

    } else {
        console.log('Ya se han creado las publicaciones');
    }
}*/


export const publicationPut = async (req, res) => {
    const { id } = req.params;
    
    const { nombre, comentario } = req.body;

    const currentDate = new Date();
    const nuevoComentario = { nombre: nombre, comentario: comentario, fecha: currentDate };
    console.log(nuevoComentario);
await Publi.findByIdAndUpdate(id, { $push: { comentarios: nuevoComentario } });
    res.status(200).json({ message: "Comentario agregado" });
}

export const publicationGet = async (req, res) => {
    try {
        const publications = await Publi.find();
        res.status(200).json(publications);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const publicationById = async (req, res) => {
    const { id } = req.params;
    const publication = await Publi.findById(id);
    
    if (!publication) {
        return res.status(404).json({ message: "Publication not found" });
    } else {
    res.status(200).json(publication);
    }
}