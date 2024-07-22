import { check } from "express-validator";
import { Router } from "express";
import { publicationPut, publicationGet, publicationById, postPublication } from "./publication.controller.js";


const router = Router();

router.post("/addPost", postPublication)

router.get("/publications", publicationGet)

router.get("/publication/:id", publicationById)

router.put(
    "/publication/:id",
    [
        check("id", "El id es obligatorio").not().isEmpty(),
        check("nombre", "El título es obligatorio").not().isEmpty(),
        check("comentario", "La descripción es obligatoria").not().isEmpty(),
    ],
    publicationPut
);

export default router;