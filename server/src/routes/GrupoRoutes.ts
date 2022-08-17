import { grupoController } from './../controller/GrupoController';
import {Router} from 'express';



class   GrupoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',grupoController.list);
        this.router.post('/',grupoController.create);
        this.router.put('/:Id_Grupo',grupoController.update);  
        this.router.get('/:Id_Grupo',grupoController.getOne);
      
    }
}

const grupoRoutes = new GrupoRoutes();
export default grupoRoutes.router;