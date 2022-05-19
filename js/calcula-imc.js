function validaPeso(peso) {
    if (peso >= 0 && peso <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

calculaImc = (peso, altura) => {
    imc = peso / (altura * altura);
    return Math.round(imc);
}

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach((paciente) => {
    peso = Number(paciente.querySelector('.info-peso').textContent);
    altura = Number(paciente.querySelector('.info-altura').textContent);

    const pesoEhValido = validaPeso(peso);
    const alturaEhvalida = validaAltura(altura)

    if (!pesoEhValido) {
        celula = paciente.querySelector('.info-imc');
        celula.textContent = 'Peso inválido!';
        console.error(`O peso ${peso} é inválido. Será necessário atualizar.`)
        paciente.classList.add('campo-invalido');
    } else if (!alturaEhvalida) {
        celula = paciente.querySelector('.info-imc');
        celula.textContent = 'Altura inválida';
        console.error(`A altura ${altura} é inválida. Será necessário atualizar.`)
        paciente.classList.add('campo-invalido');
    } else {
        imc = calculaImc(peso, altura);
        celula = paciente.querySelector('.info-imc');
        celula.textContent = imc;
    }
})
