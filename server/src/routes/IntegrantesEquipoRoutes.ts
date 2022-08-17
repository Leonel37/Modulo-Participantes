import integrantesEquipoController from '../controller/IntegrantesEquipoController';
import {Router} from 'express';



class IntegrantesEquipoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',integrantesEquipoController.list);
        this.router.post('/',integrantesEquipoController.create);
        this.router.put('/:id_In',integrantesEquipoController.update);  
        this.router.get('/:id_In',integrantesEquipoController.getOne);
      
    }
}

const integrantesEquipoRoutes = new IntegrantesEquipoRoutes();
export default integrantesEquipoRoutes.router;