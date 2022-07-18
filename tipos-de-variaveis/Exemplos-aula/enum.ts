// lidando com objeto,enum e interface
// os objetos preservam os tipos da propriedade que foram iniciados

/*const pessoa = {
    nome: 'Safira',
    idade:25,
    profissao:'Desenvovedora'
}
// alterar idade
pessoa.idade = 29

//difiniu o que o objeto recebeu isso garante que vai seguir o padrão
// quando define o tipo de variavel, não poderá violar colocando outro tipo

/*const meg:{ nome:string, idade:number,profissao:string }={
    nome:'Meg',
    idade: 25,
    profissao:'administradora'
}
const Pantera:{ nome:string, idade:number,profissao:string }={
    nome:'Pantera',
    idade: 25,
    profissao:'Administradora'
}*/
// propriedade enum: tem como objetivo verificar se um valor é número ou não e retorna verdadeiro caso realmente seja um número e falso quando se trata de um texto ou se a célula estiver vazia.
// Enum é um grupo de constantes que pode ser ultilizado para locar sempre o mesmo valor

/*enum Profissao{
    Professora,
    Atriz,
    Desenvovedora,
    JogadoDeFutebol
}
// interface
interface Pessoa{
    nome:string,
    idade:number,
    profissao?: Profissao // ? torna o objeto não obrigatorio
}
interface Estudante extends Pessoa{
    materias: string[] // lista em typescript insere[] depois do tipo da lista
}
const suellen: Pessoa ={
    nome:'Suellen',
    idade:39,
    profissao: Profissao.Desenvovedora  // pega informações do enum
}
const julia: Pessoa ={
    nome:'Julia',
    idade:29,
    profissao: Profissao.Desenvovedora  // pega informações do enum
}
const jessica : Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Atriz,
    materias:['lógica','português,inglês']

}
const sabrina : Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias:['lógica','português,inglês']

}
/*function listar(lista:String[]){
    for(const item of lista){
        console.log('- ',item);
    }
}
//listar(sabrina.materias);*/



