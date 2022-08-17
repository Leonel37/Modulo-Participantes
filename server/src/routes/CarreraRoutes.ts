import { carreraController } from './../controller/CarreraController';
import {Router} from 'express';



class   CareraRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',carreraController.list);
        this.router.post('/',carreraController.create);
        this.router.put('/:Id_Carrera',carreraController.update);  
        this.router.get('/:Id_Carrera',carreraController.getOne);
    }
}

const carreraRoutes = new CareraRoutes();
export default carreraRoutes.router;