import { categoriaParticipacionController } from '../controller/CategoriaParticipacionController';
import {Router} from 'express';



class   CategoriaParticipacionRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',categoriaParticipacionController.list);
        this.router.post('/',categoriaParticipacionController.create);
        this.router.put('/:id_CP',categoriaParticipacionController.update);  
        this.router.get('/:id_CP',categoriaParticipacionController.getOne);
      
    }
}

const categoriaParticipacionRoutes = new CategoriaParticipacionRoutes();
export default categoriaParticipacionRoutes.router;