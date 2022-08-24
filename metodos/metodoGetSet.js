const pessoa = {
    nome: "", // Valor default
    setNome: function (nome) {
        this.nome = nome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("mario"); // Definir o novo valor

console.log(pessoa.getNome()); // Mostrar o valor