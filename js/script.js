var consultaCEP = fetch ('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => {// then = então = quando a promessa é resolvida
    if (r.erro){
        throw Error ('Esse cep não existe!')
    }else
    console.log(r)
}) 
.catch(erro => console.log(erro)) //catch = pegue (no caso ele pegou o erro e imprimiu na tela) = quando a promessa é rejeitada
.finally(mensagem => console.log('Processamento concluído!')); 

console.log(consultaCEP);
