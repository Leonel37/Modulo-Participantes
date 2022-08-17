import {Request,Response} from 'express';
import pool from '../../database';

class TipoProyectoController{
    public async list(req: Request, resp:Response){
        const TipoProyecto= await pool.query('SELECT * TipoProyecto');
        resp.json(TipoProyecto);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into TipoProyecto set ?', [req.body]);
        resp.json({text: 'creating a TipoProyecto'});
        console.log(req.body);
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {id_TP} = req.params;
        await pool.query('UPDATE TipoProyecto set? WHERE id_TP=?',[req.body,id_TP]);
        resp.json({message: 'Tipo actualizado'});
    }

    public async getOne(req:Request, resp:Response):Promise<any>{
        const {id_TP}=req.params;
        const TipoProyecto= await pool.query('SELECT * FROM TipoProyecto WHERE id_TP=?',[id_TP]);
        if(TipoProyecto.length>0){
            return resp.json(TipoProyecto[0]);
        }
        resp.status(404).json({text:'No exite'});
    }

}

export const tipoProyectoController= new TipoProyectoController();
export default tipoProyectoController;