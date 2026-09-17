type CasoDeTeste = {id: number; titulo: string; descricao: string; automatizado: boolean};

function criarCasoDeTeste(id: number, titulo: string, descricao: string, automatizado: boolean): CasoDeTeste {
    return{id, titulo, descricao, automatizado}
}

function descrever(caso: CasoDeTeste): string{
    return `${caso.id} - ${caso.titulo}, ${caso.descricao}, ${caso.automatizado}`
}

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true
    return caso
}

const quantidade: number = 3;
const nome: string = "Login"
const automatizado: boolean = false

// const quantidade = 3
// const nome = "Login"
// const automatizado = false

const primeiroCaso = criarCasoDeTeste(1, "Login com senha válida", "O usuário passa a senha certa", false);
console.log(primeiroCaso);

const descricaoprimeiroCaso = descrever(primeiroCaso)
console.log(descricaoprimeiroCaso);

const marcarCasoAutomatizado = marcarAutomatizado(primeiroCaso);
console.log(marcarCasoAutomatizado);