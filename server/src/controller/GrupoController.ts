import {Request,Response} from 'express';
import pool from '../../database';

class GrupoController{
    public async list(req: Request, resp:Response){
        const Grupo= await pool.query('SELECT * Grupo');
        resp.json(Grupo);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into Grupo set ?', [req.body]);
        resp.json({text: 'creating a grupo'});
        console.log(req.body);

    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {Id_Grupo} = req.params;
        await pool.query('UPDATE Grupo set? WHERE Id_Grupo=?',[req.body,Id_Grupo]);
        resp.json({message: 'Grupo actualizado'});
    }

    public async getOne(req:Request, resp:Response):Promise<any>{
        const {Id_Grupo}=req.params;
        const Grupo= await pool.query('SELECT * FROM Grupo WHERE Id_Grupo=?',[Id_Grupo]);
        if(Grupo.length>0){
            return resp.json(Grupo[0]);
        }
        resp.status(404).json({text:'No exite'});
    }


}

export const grupoController= new GrupoController();
export default grupoController;