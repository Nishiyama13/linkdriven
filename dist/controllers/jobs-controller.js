import { findMany, insertUnique } from "../repositories/jobs-repository.js";
//retornar uma lista de vagas -> infere que é uma Array
//const jobs:string[] = ['Tech Lead', 'Developer']; //type de array de string
var resultado = true; //true/false/123154
//type em array
//const jobs: (string | boolean)[] = ['Tech Lead', 'Developer', false] //Array que aceita string e boolean
//type em objetos
var job = {
    id: 1,
    title: 'Tech Lead',
    salary: 4000,
    skills: ['typeScript', 'react', 1],
    until: '2023-10-10'
};
//console.log(job)   
/*{
  id: 1,
  title: 'Tech Lead',
  salary: 4000,
  skills: [ 'typeScript', 'react', 1 ],
  until: '2023-10-10'
}
*/
//dado a estrutura do jobs, agora queremos construir uma Arrayd e jobs
//com o ? tira a obrigatoriedade de ter alguma das propriedades definidas (o 3º elemento não tem id)
//A ideia é termos nossa própria tipagem então esse bloco foi enviado ao jobs-repository fake.
/*
const jobs: {
    id?:number,
    title: string,
    salary:number,
    skills: (string | number)[],
    until: string | Date
}[] = [{
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
var nome = "Naruto";
function getJob(req, res) {
    return res.send(job);
}
//retorna todos os jobs (array de objetos)
function listAll(req, res) {
    var resultado = findMany();
    return res.send(resultado);
}
function insert(req, res) {
    //apenas pra testar e o programa não ficar crachando
    /*    insertUnique({
            id:4,
            title: 'Developer II',
            salary: 3000,
            skills: ['typeScript', 'react', 1],
            until: '2023-10-10'
        })
    */
    var newJob = req.body;
    //varArmazenamento = dadosRecebidosDoBody (se comporte como) typeJobs
    var insertJob = insertUnique(newJob);
    return res.send("Job inserted with id: ".concat(insertJob.id));
}
export { listAll, getJob, insert };
