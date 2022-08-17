import {Request,Response} from 'express';
import pool from '../../database';

class IntegrantesEquipoController{
    public async list(req: Request, resp:Response){
        const IntegrantesEquipo= await pool.query('SELECT * IntegrantesEquipo');
        resp.json(IntegrantesEquipo);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into IntegrantesEquipo set ?', [req.body]);
        resp.json({text: 'creating a integrante'});
        console.log(req.body);
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {id_In} = req.params;
        await pool.query('UPDATE IntegrantesEquipo set? WHERE id_In=?',[req.body,id_In]);
        resp.json({message: 'Integrante Actualizado'});
    }
    public async getOne(req:Request, resp:Response):Promise<any>{
        const {id_In}=req.params;
        const IntegrantesEquipo= await pool.query('SELECT * FROM IntegrantesEquipo WHERE id_In=?',[id_In]);
        if(IntegrantesEquipo.length>0){
            return resp.json(IntegrantesEquipo[0]);
        }
        resp.status(404).json({text:'No exite'});
    }
   

}

export const integrantesEquipoController= new IntegrantesEquipoController();
export default integrantesEquipoController;