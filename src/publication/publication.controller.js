import Publi from './publication.model.js'

import { response } from 'express'

export const publiHuellitasAmati = async (res = response) =>{
    const publicationDefault = new Publi({
        nombre: "HuellitasAmati",
        descripcion: "HuellitasAmati es una organización sin fines de lucro comprometida con la noble causa de salvar y mejorar la vida de animales que han sido abandonados, maltratados o que se encuentran en situaciones de riesgo. Con un equipo apasionado y dedicado, su misión principal es intervenir en la vida de estas mascotas vulnerables, rescatándolas de entornos peligrosos y brindándoles la atención y el cuidado necesarios para su recuperación. Trabajan incansablemente para ofrecerles un refugio temporal seguro donde puedan sanar física y emocionalmente. Posteriormente, se esfuerzan por encontrar hogares permanentes y amorosos que les proporcionen la estabilidad y el afecto que merecen. Además, buscan sensibilizar a la comunidad sobre la importancia del respeto y cuidado hacia los animales, promoviendo la adopción responsable como una alternativa compasiva y sostenible. En cada paso de este proceso, se guían por el amor y el compromiso hacia el bienestar animal, con la esperanza de construir un mundo donde ningún animal tenga que sufrir el abandono o el maltrato.",
        mision: "Su misión es rescatar a mascotas necesitadas, rehabilitarlas y encontrarles hogares permanentes y amorosos. La asociación se esfuerza por garantizar que cada animal que rescatan reciba la atención médica, el cuidado y el cariño necesarios para recuperarse completamente. Además, promueven el bienestar animal a través de diversas campañas educativas y de sensibilización que buscan crear conciencia en la comunidad sobre la importancia de la adopción y el cuidado responsable de las mascotas. Se comprometen a informar a las personas sobre los beneficios de adoptar en lugar de comprar y a proporcionarles las herramientas y recursos necesarios para que puedan cuidar adecuadamente a sus nuevos compañeros de vida. Asimismo, colaboran con otras organizaciones y autoridades locales para abordar problemas más amplios relacionados con el bienestar animal, como el control de la población de animales callejeros y la prevención del maltrato y la negligencia. En resumen, trabajan incansablemente para construir un futuro mejor para todos los animales, donde cada uno pueda vivir una vida plena, saludable y feliz.",
        comoDonar: "",
        comoAyudar: "",
        linkDonacion: "",
        imagenPrincipal: "",
        imagenes: "",
        caracteristicasPrincipales: "",
        caracteristicasSecundarias: ""
    });
    await publicationDefault.save()
}

export const comprobarInformacion = async (req, res) => {
    const publications = await Publi.find();

    console.log("hola");
    if (publications.length === 0) {
        publiHuellitasAmati(res);

    } else {
        console.log('Ya se han creado las publicaciones');
    }
}


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