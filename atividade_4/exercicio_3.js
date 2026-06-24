//Exercício 3 – Classificação de Alunos

const alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
const notas = [9, 5, 7, 10, 4];

let destaque = 0;
let bom = 0;
let melhorar = 0;

console.log("=== Classificação dos Alunos ===\n");

for (let i = 0; i < alunos.length; i++) {
    const nome = alunos[i];
    const nota = notas[i];

    console.log("Aluno: " + nome + " | Nota: " + nota);

    let status;

    if (nota >= 8) {
        destaque++;
        status = "Destaque";
    } else if (nota >= 6 && nota <= 7) {
        bom++;
        status = "Está bom";
    } else {
        melhorar++;
        status = "Precisa melhorar";
    }

    let statusTernario = (nota >= 8) 
        ? "Destaque" 
        : (nota >= 6 && nota <= 7) 
            ? "Está bom" 
            : "Precisa melhorar";

    console.log("Status (usando if): " + status);
    console.log("Status (usando ternário): " + statusTernario + "\n");
}

    console.log("=== Resumo Geral da Turma ===");
    console.log("Total de alunos: " + alunos.length);
    console.log("Destaque: " + destaque);
    console.log("Está bom: " + bom);
    console.log("Precisa melhorar: " + melhorar);
    