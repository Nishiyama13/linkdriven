export type JobEntity = {
    id:number,
    title: string,
    salary:number,
    skills: string,
    until: string | Date
}

//criando um tipo com base no generics
export type Job = Omit<JobEntity, "id">

export type NewJob = Partial<JobEntity>


/*antigo 

//tabela do banco 
export type JobEntity = {
    id:number,
    title: string,
    salary:number,
    skills: (string | number)[],
    until: string | Date
}

//criando um tipo com base no generics
export type Job = Omit<JobEntity, "id">

export type NewJob = Partial<JobEntity>

//Para não ter problemas na revificação dos dados vamos utilizar também a bibliote joy
//instalar joi: 

//npm i joi

//O joi já vem com o type por padrão, portanto não é necessário inportar os types //npm i -D $types/joi
//O Joi tem um sistema de importação diferente do ts, ele usa o sistema de pastas para localizar onde esta o arquivo de importração, pra isso temos que editar o tsconfig.json

//node_modules -> joi -> dist ->joi-browser.min.js    da um copy relative path e coloca no tsconfig.json (tirar o .ts)

//portanto add esse bloco
/*
        "baseUrl": ".",
        "paths": {
            "joi":[
                "node_modules/joi/dist/joi-browser.min"
            ]
        }
*/

//tsconfig.json fica:
/*
{
    "compilerOptions": {
        "outDir": "dist",
        "esModuleInterop": true,
        "module": "ES6",
        "baseUrl": ".",
        "paths": {
            "joi":[
                "node_modules/joi/dist/joi-browser.min"
            ]
        }
    },
    "ts-node": {
        "esm": true
    }
}
*/


//2ª forma de configurar o ts config seria menor:
// seria dd apenas a linha   //"moduleResolution": "Node"
/*
{
    "compilerOptions": {
        "outDir": "dist",
        "esModuleInterop": true,
        "module": "ES6",
        "moduleResolution": "Node"
    },
    "ts-node": {
        "esm": true
    }
}
*/
