//agora com prisma
//1 instalar npm i -D @prisma/client
//2- ir corrigir a repositories
//3- vai corrigir jobs-controller
//4- Em repositorory esconha a função prisma que vai utilizar

import pkg from "@prisma/client"

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;

/***************************************** */
/*//antes:
import pg from "pg";

const { Pool } = pg;


//.env

const connection = new Pool({
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'secret',
    database: 'jobs'
})

export { connection }
*/


//1 insta a lib do pstgres para usar em produção
//npm i pg

//2 instal a lib dos typoes do pg
//npm i -D @types/pg