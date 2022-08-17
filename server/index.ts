import express, {Application} from "express";
import indexRoutes from "./src/routes/indexRoutes";
import TipoProyectoRoutes from "./src/routes/TipoProyectoRoutes";
import CategoriaParticiapcionRoutes from "./src/routes/CategoriaParticiapcionRoutes";
import RegistroParticipacionRoutes from "./src/routes/RegistroParticipacionRoutes";
import GrupoRoutes from "./src/routes/GrupoRoutes";
import CarreraRoutes from "./src/routes/CarreraRoutes";
import IntegrantesEquipoRoutes from "./src/routes/IntegrantesEquipoRoutes";
import morgan from 'morgan';
import cors from 'cors';

console.log('WORKS!!');

class Server{

    public app : Application;
    constructor(){
      this .app =  express();
      this .config();
      this .routes();
    }

config(): void{
    this.app.set('port',process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended : false}));
}

routes(): void{
    this.app.use('/',indexRoutes);
    this.app.use('/api/tipop',TipoProyectoRoutes); //ruta propia
    this.app.use('/api/catego',CategoriaParticiapcionRoutes);
    this.app.use('/api/registro',RegistroParticipacionRoutes);
    this.app.use('/api/carrera',CarreraRoutes);
    this.app.use('/api/grupo',GrupoRoutes);
    this.app.use('/api/integrantes',IntegrantesEquipoRoutes);
    
}

start() : void{
  this.app.listen(this.app.get('port'),()=>{
    console.log('Server on port',this.app.get('port'));
  });

}
}

const server =new Server();// ejecuta la clese y devuelve un objeto
server.start();