import { Request, Response } from 'express';

//tipando variáveis
const nome: string = 'Nina';   //define uma string   //nome.    faça para ver as propriedades
const valor: number = 13;       //define um number   //valor.
const bool: boolean = false;       //define um boolean //bool.

//inferencia de nome
let name = 'Alicia';
//console.log(name);    //Alicia
name = "Jonas";
//console.log(name);    //Jonas

//inferencia em funçaõ
function isOdd(numb) {
    if(numb % 2 !== 0){
        return false;
    }
}

const resultado = isOdd(1);
//p entrada valendo 1:
//console.log(resultado);  //false (boolean)

function sayHello(name: string): string{
    //void é para fç que não retornam nada ou vazio
    console.log( 'Hello' + name);
    return( 'Hello' + name);
}

function convertSlary(salary: number): number{
    //nomeDaFuncao(nomeVar: typeDaEntrada): typeDaSaida
    return salary + (salary * 0.3)
}

function convertCLTToPj(req: Request, res: Response){

    const { salary } = req.query; //string

    const newSalary = convertSlary(Number(salary));

    res.send({
        resultado: `O seu slário deve ser pelo menos: ${newSalary}`
    })
}

export {
    convertCLTToPj
};