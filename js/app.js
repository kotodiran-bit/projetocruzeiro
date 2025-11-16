// Exemplo: simular doação
function registrarDoacao() {
    const nome = document.querySelector("#nome").value;
    const valor = document.querySelector("#valor").value;

    if (!nome || !valor) {
        alert("Preencha todos os campos.");
        return;
    }

    alert(`Obrigado ${nome}, sua doação de R$ ${valor} foi registrada!`);

    // Poderia ser salvo em localStorage ou enviado a API
}
