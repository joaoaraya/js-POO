const extrair = {
    numero: function(texto) {
        return texto ? texto.replace(/\D/g, '') : texto; 
    }
}

const cep = extrair.numero('23496-020');
const telefone = extrair.numero('+55 (32) 1234-5678');
const cpf = extrair.numero('99999999999');

console.log(cep, telefone, cpf); // Mostrar o valor