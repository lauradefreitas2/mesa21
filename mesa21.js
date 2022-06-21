// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA

class Aluno {
    constructor(nome, sexo, id, notas, turma) {
        this.nome = nome;
        this.sexo = sexo;
        this.id = id;
        this.notas = notas;
        this.turma = turma;
        this.media = () => {
            let media = this.notas.reduce((acc, cur) => {
                return acc + cur;
            });
            media = media / this.notas.length;
            return media;
        };
    };
};

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

let arrayAlunos = [];
arrayAlunos.push(
    new Aluno('Fernando Correa', 'M', 1, [10, 9, 9], 1),
    new Aluno('Antonio Martins', 'M', 2, [6, 10, 5], 2),
    new Aluno('Camila Gonçalves', 'F', 3, [3, 2, 5], 1),
    new Aluno('Geraldo Botelho', 'M', 4, [10, 10, 10], 3),
    new Aluno('Carlos Bretas', 'M', 5, [10, 7, 6], 2),
    new Aluno('Ricardo Teixeira', 'M', 6, [8, 8, 8], 2),
    new Aluno('Rafaela Martins', 'F', 7, [8, 10, 6], 3),
    new Aluno('Ana Claudia', 'F', 8, [7, 3, 10], 3),
    new Aluno('Bruno Cardoso', 'M', 9, [9, 6, 9], 1),
    new Aluno('Thais Abreu', 'F', 10, [7, 10, 6], 2)
);
// console.log(arrayAlunos);

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

// MEDIA TOTAL DE NOTAS 

let mediaNotaAlunos = obj => {
    let arrayMedias = obj.map(e => e.media());
    let somaMedias = 0;
    for (let i = 0; i < arrayMedias.length; i++) {
        somaMedias += arrayMedias[i] / arrayMedias.length;
    };
    console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
};
mediaNotaAlunos(arrayAlunos);

// MEDIA DE ALUNOS HOMENS E MULHERES

let mediaNotaGenero = (obj, gen) => {
    let arrayAluno = obj.filter(e => e.sexo == gen);
    if (gen == 'M') {
        let arrayMedia = arrayAluno.map(e => e.media())
        let resultMedia = 0;
        for (let i = 0; i < arrayMedia.length; i++) {
            resultMedia += arrayMedia[i] / arrayMedia.length;
        };
        console.log(`A média dos alunos do gênero masculino é ${resultMedia.toFixed(2)}.`);
    } else if (gen == 'F') {
        let arrayMedia = arrayAluno.map(e => e.media())
        let resultMedia = 0;
        for (let i = 0; i < arrayMedia.length; i++) {
            resultMedia += arrayMedia[i] / arrayMedia.length;
        };
        console.log(`A média dos alunos do gênero feminino é ${resultMedia.toFixed(2)}.`);
    };
};

mediaNotaGenero(arrayAlunos, 'M');