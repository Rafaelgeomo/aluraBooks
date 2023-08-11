function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto )} //os tres pontos ele faz uma copia do array livros e altera o preço (menos o desconto)

    })
    return livrosComDesconto
}