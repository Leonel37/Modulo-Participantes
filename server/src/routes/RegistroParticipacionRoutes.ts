import registroParticipacionController from '../controller/RegistroParticipacionController';
import {Router} from 'express';



class   RegistroParticipacionRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',registroParticipacionController.list);
        this.router.post('/',registroParticipacionController.create);
        this.router.put('/:id_RP',registroParticipacionController.update);  
        this.router.get('/:id_RP',registroParticipacionController.getOne)

      
    }
}

const registroParticipacionRoutes = new RegistroParticipacionRoutes();
export default registroParticipacionRoutes.router;