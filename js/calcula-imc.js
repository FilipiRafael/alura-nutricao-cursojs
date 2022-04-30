calculaImc = (peso, altura) => {
    imc = peso / (altura * altura);
    return Math.round(imc);
}

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach((paciente) => {
    peso = Number(paciente.querySelector('.info-peso').textContent);
    altura = Number(paciente.querySelector('.info-altura').textContent);

    if (peso <= 0 || peso >= 300) {
        celula = paciente.querySelector('.info-imc');
        celula.textContent = 'Peso inválido!';
        console.error(`O peso ${peso} é inválido. Será necessário atualizar.`)
        paciente.classList.add('campo-invalido');
    } else if (altura >= 3 || altura <= 0) {
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
