import prisma from "../src/database/database.js"; //importar a conexão com o banco de dados.

async function main() {
    await prisma.jobs.createMany({
        data:[
            {
              "title": "estagiário do jr",
              "salary": "700",
              "skills": [
                "typeScript",
                "react",
                "mongodB",
                "SQL",
                "pacote Office",
                "mestrado em área correlata",
                "experiência min 3 anos na área"
              ],
              "until": "2023-10-10T00:00:00.000Z"
            },
            {
              "title": "dev jr",
              "salary": "5700",
              "skills": [
                "typeScript",
                "react",
                "mongodB",
                "SQL",
                "pacote Office",
                "mestrado em área correlata",
                "experiência min 3 anos na área"
              ],
              "until": "2023-10-10T00:00:00.000Z"
            },
            {
              "title": "dev pleno",
              "salary": "9700",
              "skills": [
                "typeScript",
                "react"
              ],
              "until": "2023-10-10T00:00:00.000Z"
            },
            {
                "title": "dev pleno II",
                "salary": "9700",
                "skills": [
                  "javaScript"
                ],
                "until": "2023-10-10T00:00:00.000Z"
            },
            {
                "title": "dev pleno III",
                "salary": "9700",
                "skills": [
                  "javaScript","TypeScript"
                ],
                "until": "2023-10-10T00:00:00.000Z"
            },
            {
              "title": "CTO",
              "salary": "49700",
              "skills": [
                "typeScript",
                "react",
                "mongodB",
                "SQL",
                "pacote Office",
                "mestrado em área correlata",
                "experiência min 3 anos na área"
              ],
              "until": "2023-10-10T00:00:00.000Z"
            },
            {
              "title": "UIX",
              "salary": "4700",
              "skills": [
                "IA",
                "pacote Office",
                "experiência min 3 anos na área"
              ],
              "until": "2023-10-10T00:00:00.000Z"
            }
          ]
    })
}

main()
    .then(() => {
        console.log("Pegistro feito com sucesso!")
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })

    //se der certo ou errado epor algum motivo não encerrar, aqui com toda ctz encerra
    .finally(async () => {
        await prisma.$disconnect();
    }); 


    // colocar no package.json  em script:     "prisma:seed": "npx prisma db seed"
    //para rodar usar npm run prisma:seed
    