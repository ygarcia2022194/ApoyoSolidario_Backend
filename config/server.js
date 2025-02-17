'use strict'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import publicacionesRoutes from '../src/publication/publication.routes.js'
import noticiaRoutes from '../src/noticias/noticia.routes.js'
import { dbConnection } from './mongo.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.publicacionesPath = '/apoyoSolidario/v1'
        this.noticiasPath = '/apoyoSolidario/v1'

        this.middlewares();
        this.conectDB();
        this.routes();
    }

    async conectDB(){
        await dbConnection();
        //await comprobarInformacion(); 
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.publicacionesPath, publicacionesRoutes)
        this.app.use(this.noticiasPath, noticiaRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

export default Server;
