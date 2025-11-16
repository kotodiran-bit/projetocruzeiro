function atualizarDashboard() {
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
    const doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];
    const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

    document.getElementById("totalProjetos").innerText = projetos.length;
    document.getElementById("totalDoacoes").innerText = doacoes.length;
    document.getElementById("totalVoluntarios").innerText = voluntarios.length;
}

window.onload = atualizarDashboard;
