import express from "express";
import { convertCLTToPj } from './controllers/calculator-controller.js';
import { listAll, insert } from './controllers/jobs-controller.js';
const server = express();
server.use(express.json());

server.get('/health', (req,res) => {
    res.send('ok');
})

server.get('/calculator', convertCLTToPj);

//ou roda listAll ou getJob, um por vez no teste da rota
server.get('/jobs', listAll);
//server.get('/jobs', getJob);
server.post('/jobs', insert); 

server.listen(4001, () => {
    console.log('Esta executando...');
})

//para rodar usar o comando npx nodemon src/app.js
//npm init -y
//npm i express

//dependencias
//npm i -D typescript
//npm i -D @types/express  //carrega os tipos prontos do express

//criar tsconfig.json
//npx tsc //para criar a pasta dist

//configurar tb 
//agora inicia com: 
//npx ts-node src/app.ts // para não precisar ficar fazendo tsc, atualizando e chamar com //npx nodemon dist/app.js

//para execudar com o nodemon e ter o auto reloud instalar
//npm i -D ts-node

//para a versão completa com autoreload rodar com:
//npx nodemon src/app.ts

//tsconfig.json fica:
/*
{
    "compilerOptions": {
        "outDir": "dist",
        "esModuleInterop": true,
        "module": "ES6"
    },
    "ts-node": {
        "esm": true
    }
}
*/
