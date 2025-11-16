function salvarProjeto(projeto) {
    const lista = JSON.parse(localStorage.getItem("projetos")) || [];
    lista.push(projeto);
    localStorage.setItem("projetos", JSON.stringify(lista));
}

function listarProjetos() {
    return JSON.parse(localStorage.getItem("projetos")) || [];
}

function removerProjeto(id) {
    let lista = listarProjetos();
    lista = lista.filter(p => p.id !== id);
    localStorage.setItem("projetos", JSON.stringify(lista));
}
