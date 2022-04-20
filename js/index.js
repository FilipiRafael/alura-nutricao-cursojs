let pacientePrimeiro = document.querySelector("#primeiro-paciente");
let pesoPrimeiro = Number(pacientePrimeiro.querySelector(".info-peso").textContent);
let alturaPrimeiro = Number(pacientePrimeiro.querySelector(".info-altura").textContent);

if (pesoPrimeiro <= 0 || pesoPrimeiro >= 1000) {
    celula = pacientePrimeiro.querySelector(".info-imc");
    celula.textContent = "Peso inválido!";
    celula.style.color = "red";
    celula.style.textTransform = "uppercase";
    celula.style.fontWeight = "bold";
} else if (alturaPrimeiro >= 3 || alturaPrimeiro <= 0) {
    celula = pacientePrimeiro.querySelector(".info-imc");
    celula.textContent = "Altura inválida!";
    celula.style.color = "red";
    celula.style.textTransform = "uppercase";
    celula.style.fontWeight = "bold";
} else {
    calculaImc = (peso, altura) => {
        imc = peso / (altura * altura)
        return imc
    }
}


let resultadoPrimeiroPaciente = calculaImc(pesoPrimeiro, alturaPrimeiro);

pacientePrimeiro.querySelector(".info-imc").innerHTML = resultadoPrimeiroPaciente;