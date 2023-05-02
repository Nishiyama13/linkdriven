//simula um bando para tirar da camada repositories
import { Job } from "../protocols/Job.js";  //importa o type criado

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

export default jobs;