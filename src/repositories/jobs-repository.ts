
//import { QueryResult } from "pg";
//versão 1 c/ banco de dados pg:       
/*import jobs from "../database/data.js"
//importa a conexão da data base
import { connection } from "../database/database.js";
*/
import prisma from "../database/database.js";
import { Job, NewJob } from "../protocols/Job.js"

async function findMany(){
    return prisma.jobs.findMany(); //aqui esconhe o tipo de função do prista (findMany, findFirst, FindUnique...)
    //vai corrigir jobs-controller
}

async function insertUnique(job: Job){
    return prisma.jobs.create({
        data: job
    })
}

//where tem SEMPRE que ser em um campo unique (1 ou 0 registros)
async function upsert(job: NewJob) {
    return prisma.jobs.upsert({
        where:{
            id: job.id || 0,  //undefined se não existir, por isso comocar o 0 para cobreir esse problema
        },
        create: job as Job,
        update: job
    })
}


export {
    findMany, insertUnique, upsert
}

/*async function upsert(job: NewJob) {
    return prisma.jobs.upsert({
        where:{
            id: job.id || 0,  //undefined se não existir, por isso comocar o 0 para cobreir esse problema
        },
        create: job as Job,
        update: job
    })
}

export {
    findMany, insertUnique, upsert
}

//**********************************antes */
//copiar o array de jobs para fazer nossa própria tipágem
/*
type Job = {
    id?:number,
    title: string,
    salary:number,
    skills: (string | number)[],
    until: string | Date
}
*/
// no entanto para podermos usar esse tipo em outros arquivos o ideal é isolaro em um arquivo de type, por isso saiu daqui de cima
//import { Job, JobEntity } from "../protocols/Job.js"

/*
como essa parete simula um bando de dados, vamos tambem tirar daqui e colocar em database.ts
const jobs: Job[] = [{
    id:1,
    title: 'Tech Lead',
    salary: 4000,
    skills: ['typeScript', 'react', 1],
    until: '2023-10-10'
}, {
    id:2,
    title: 'Developer',
    salary: 3000,
    skills: ['typeScript', 'react', 1],
    until: '2023-10-10'
}, {
    title: 'Developer jr',
    salary: 1500,
    skills: ['typeScript', 'react', 1],
    until: '2023-10-10'
}];
*/
//import jobs from "../database/data.js"



//finalmente, repositoies fica apenas com as funções

/*
async function findMany(): Promise<QueryResult<Job>> {
    return connection.query("SELECT * FROM jobs");
}
*/

 /*   job.id = jobs.length + 1; //para dar um auto incremente do id ao add alguem
    jobs.push(job)
    return job;
    */
   /*
async function insertUnique(job: Job){


    connection.query(`
        INSERT INTO jobs (title, salary, skills, until) VALUES ($1,$2,$3,$4)
    `, [job.title, job.salary, job.skills , job.until]);
}




export {
    findMany, insertUnique
}

*/
//-- Agora com o prisma ORM não vamos mais usar querys