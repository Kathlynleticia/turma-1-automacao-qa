// import readline from "readline";

import PromptSync from "prompt-sync";

// const rl = readline.createInterface( {
//     input: process.stdin,
//     output:process.stdout
// });

// const resultados = ["Automatizado", "Automatizado", "Automatizado", "Não-Automatizado", "Automatizado"];
// let automatizados = 0;
// let naoAutomatizados = 0;

// for (let i = 0; i < resultados.length; i++) {
//     if (resultados[i] === "Automatizado") {
//         automatizados = automatizados + 1;
//     } else {
//         naoAutomatizados = naoAutomatizados +1;
//     }
// }

// console.log(`Automatizados: ${automatizados}, Não-Automatizados: ${naoAutomatizados}`);


const prompt = PromptSync();

let automatizaveis:number = 0;
let naoAutomatizaveis:number = 0;

for (let i = 1; i<=5; i++) {
    const cenario: string = prompt(`Digite o ${i}o cenário: `);
    const resposta: string = prompt(`É automatizavél? (sim/não)`).toLowerCase();
    

    if (resposta === "sim" ) {
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++
    } else if (resposta === "não" || resposta === "nao") {
        console.log(`${cenario} -> Não-Automatizar`);
        naoAutomatizaveis++
    } else {
        console.log("Ocorreu um erro!")
    }
}

console.log(`Total de cenários automatizaveis: ${automatizaveis}`);
console.log(`Total de cenários não automatizaveis: ${naoAutomatizaveis}`);