import {Request,Response} from 'express';
import pool from '../../database';

class CarreraController{
    public async list(req: Request, resp:Response){
        const Carrera= await pool.query('SELECT * Carrera');
        resp.json(Carrera);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into Carrera set ?', [req.body]);
        resp.json({text: 'creating a categoria'});
        console.log(req.body);
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {Id_Carrera} = req.params;
        await pool.query('UPDATE Carrera set? WHERE Id_Carrera=?',[req.body,Id_Carrera]);
        resp.json({message: 'Carrera actualizada'});
    }

    public async getOne(req:Request, resp:Response):Promise<any>{
        const {Id_Carrera}=req.params;
        const Carrera= await pool.query('SELECT * FROM Carrera WHERE Id_Carrera=?',[Id_Carrera]);
        if(Carrera.length>0){
            return resp.json(Carrera[0]);
        }
        resp.status(404).json({text:'No exite'});
    }

}

export const carreraController= new CarreraController();
export default carreraController;