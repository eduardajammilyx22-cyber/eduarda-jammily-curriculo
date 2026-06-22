document
.getElementById("formContato")
.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let resultado = document.getElementById("resultado");

    if(nome === "" || email === "" || mensagem === ""){
        resultado.style.color = "red";
        resultado.textContent =
        "Preencha todos os campos antes de enviar.";
        return;
    }

    resultado.style.color = "green";
    resultado.textContent =
    "Mensagem enviada com sucesso! (simulação)";
});

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        temaBtn.textContent = "☀️ Tema Claro";
    } else {
        temaBtn.textContent = "🌙 Tema Escuro";
    }

});