import { getNoticias, createNoticia, deleteNoticias } from './noticias.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/noticia', getNoticias)
  
router.post('/noticia' ,createNoticia);


router.delete('/noticia/:id', deleteNoticias)

export default router;