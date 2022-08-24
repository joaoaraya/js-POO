/// OBJETO
class Humano {
    constructor(nome, dataNascimento, corPele)
    {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.corPele = corPele;
    }
}
/// NOVA INSTANCIA
let homem = new Humano('mario',1980, 'branco');

console.log(homem);