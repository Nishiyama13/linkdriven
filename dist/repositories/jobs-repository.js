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
import jobs from "../database/data.js";
//finalmente, repositoies fica apenas com as funções
function findMany() {
    return jobs;
}
function insertUnique(job) {
    job.id = jobs.length + 1; //para dar um auto incremente do id ao add alguem
    jobs.push(job);
    return job;
}
export { findMany, insertUnique };
