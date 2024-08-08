let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = `R$${saldo}`;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (!elementoFormulario.checkVisibility()){
        alert("Por favor, preencha todos os dados da transação!");
        return
    }
})