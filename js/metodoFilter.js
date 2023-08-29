const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)); // forEach faz com que ele tenha um evento de click em todos os botoes de uma so vez chamando a function filtrarLivros

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id) //pegar o id do botao que nos estamos (o elemento inteiro)
    const categoria = elementoBtn.value //filtra somente o valor desse elemento
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter (livro => livro.quantidade > 0) : livros.filter (livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)

}