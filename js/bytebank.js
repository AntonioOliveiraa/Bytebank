let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (!elementoFormulario.checkVisibility()){
        alert("Por favor, preencha todos os dados da transação!");
        return
    }

    const inputTipoTransação = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao = inputTipoTransação.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == "Depósito") {
        saldo += parseFloat(valor);
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= parseFloat(valor);
    } else {
        alert("Transação inválida!");
        return
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: parseFloat(valor),
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();

})

