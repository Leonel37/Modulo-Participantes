import {Request,Response} from 'express';
import pool from '../../database';

class CategoriaParticipacionController{
    public async list(req: Request, resp:Response){
        const CategoriaParticipacion= await pool.query('SELECT * CategoriaParticipacion');
        resp.json(CategoriaParticipacion);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into CategoriaParticipacion set ?', [req.body]);
        resp.json({text: 'creating a categoria'});
        console.log(req.body);

    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {id_CP} = req.params;
        await pool.query('UPDATE CategoriaParticipacion set? WHERE id_CP=?',[req.body,id_CP]);
        resp.json({message: 'Categoria Participacion actualizada'});
    }

    public async getOne(req:Request, resp:Response):Promise<any>{
        const {id_CP}=req.params;
        const CategoriaParticipacion= await pool.query('SELECT * FROM CategoriaParticipacion WHERE id_CP=?',[id_CP]);
        if(CategoriaParticipacion.length>0){
            return resp.json(CategoriaParticipacion[0]);
        }
        resp.status(404).json({text:'No exite'});
    }

}

export const categoriaParticipacionController= new CategoriaParticipacionController();
export default categoriaParticipacionController;