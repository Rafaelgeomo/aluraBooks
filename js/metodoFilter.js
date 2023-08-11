const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosDeFront.addEventListener('click',filtrarLivros)

function filtrarLivros(){
    let livrosFiltrados = livros.filter(livros => livros.categoria == 'front-end')
    console.table(livrosFiltrados)

}