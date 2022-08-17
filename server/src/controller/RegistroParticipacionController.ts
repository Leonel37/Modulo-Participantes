import {Request,Response} from 'express';
import pool from '../../database';

class RegistroParticipacionController{
    public async list(req: Request, resp:Response){
        const RegistroParticipacion= await pool.query('SELECT * RegistroParticipacion');
        resp.json(RegistroParticipacion);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into RegistroParticipacion set ?', [req.body]);
        resp.json({text: 'creating a participante'});
        console.log(req.body);

    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {id_RP} = req.params;
        await pool.query('UPDATE RegistroParticipacion set? WHERE id_RP=?',[req.body,id_RP]);
        resp.json({message: 'Registro actualizado'});
    }

    public async getOne(req:Request, resp:Response):Promise<any>{
        const {id_RP}=req.params;
        const RegistroParticipacion= await pool.query('SELECT * FROM RegistroParticipacion WHERE id_RP=?',[id_RP]);
        if(RegistroParticipacion.length>0){
            return resp.json(RegistroParticipacion[0]);
        }
        resp.status(404).json({text:'No exite'});
    }


}

export const registroParticipacionController= new RegistroParticipacionController();
export default registroParticipacionController;