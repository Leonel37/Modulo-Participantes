import { tipoProyectoController } from './../controller/TipoProyectoController';
import {Router} from 'express';



class   TipoProyectoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',tipoProyectoController.list);
        this.router.post('/',tipoProyectoController.create);
        this.router.put('/:id_TP',tipoProyectoController.update);  
        this.router.get('/:id_TP',tipoProyectoController.getOne)
      
    }
}

const tipoProyectoRoutes = new TipoProyectoRoutes();
export default tipoProyectoRoutes.router;