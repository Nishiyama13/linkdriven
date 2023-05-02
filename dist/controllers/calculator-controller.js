//tipando variáveis
var nome = 'Nina'; //define uma string   //nome.    faça para ver as propriedades
var valor = 13; //define um number   //valor.
var bool = false; //define um boolean //bool.
//inferencia de nome
var name = 'Alicia';
//console.log(name);    //Alicia
name = "Jonas";
//console.log(name);    //Jonas
//inferencia em funçaõ
function isOdd(numb) {
    if (numb % 2 !== 0) {
        return false;
    }
}
var resultado = isOdd(1);
//p entrada valendo 1:
//console.log(resultado);  //false (boolean)
function sayHello(name) {
    //void é para fç que não retornam nada ou vazio
    console.log('Hello' + name);
    return ('Hello' + name);
}
function convertSlary(salary) {
    //nomeDaFuncao(nomeVar: typeDaEntrada): typeDaSaida
    return salary + (salary * 0.3);
}
function convertCLTToPj(req, res) {
    var salary = req.query.salary; //string
    var newSalary = convertSlary(Number(salary));
    res.send({
        resultado: "O seu sl\u00E1rio deve ser pelo menos: ".concat(newSalary)
    });
}
export { convertCLTToPj };
