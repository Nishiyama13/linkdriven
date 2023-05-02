import { Request, Response } from "express";

import { findMany, upsert } from "../repositories/jobs-repository.js" 
//insertUnique
import { NewJob } from "../protocols/Job";
import { JobSchema } from "../schemas/job-schema.js"

//retorna todos os jobs (array de objetos)
async function listAll(req: Request, res: Response){
    const resultado = await findMany();

    return res.send(resultado);
}

async function insert (req: Request, res: Response){

   const newJob = req.body as NewJob                           //varArmazenamento = dadosRecebidosDoBody (se comporte como) typeJobs

   const resultado = await upsert(newJob);            //agora modificar no repository
   
   return res.send(`Job insert ${resultado}`);
}

//armazena em uma var a req.body 
//valida os dados de entrada
//trata o erro
//ne não tiver erro, espera a resposta da fç inserUnique do prisma e passa pra ele esse newJob da entrada.
//quando responder envia o aviso que o newJob foi inserido do banco.

export {
    listAll, insert
}