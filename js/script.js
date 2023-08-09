async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML= "";
    try {
    var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro){
        throw Error('CEP não existente');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;
    estado.value = consultaCEPConvertida.uf;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML= `<p> CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


// let ceps = ['01001000','01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));// vai fazer um novo array com o que retornar da função buscaEndereco para cada um dos valores do de dentro do CEP, e esses valores vão ser promessas
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(resposta => console.log(resposta)); //para resolver os arrays de promessas



// .then(resposta => resposta.json())
// .then(r => {// then = então = quando a promessa é resolvida
//     if (r.erro){
//         throw Error ('Esse cep não existe!')
//     }else
//     console.log(r)
// }) 
// .catch(erro => console.log(erro)) //catch = pegue (no caso ele pegou o erro e imprimiu na tela) = quando a promessa é rejeitada
// .finally(mensagem => console.log('Processamento concluído!')); 


