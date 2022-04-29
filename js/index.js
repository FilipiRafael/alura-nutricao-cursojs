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

const addButton = document.querySelector('.bto-principal');
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('#form-adiciona');
    const nome = form.nome.value;
    const altura = form.altura.value;
    const peso = form.peso.value;
    const gordura = form.gordura.value;
    
    const addPacienteRow = document.createElement('tr');
    const addPacienteName = document.createElement('td');
    const addPacienteAltura = document.createElement('td');
    const addPacientePeso = document.createElement('td');
    const addPacienteGordura = document.createElement('td');
    const addPacienteImc = document.createElement('td')

    addPacienteName.textContent = nome;
    addPacienteAltura.textContent = altura;
    addPacientePeso.textContent = peso;
    addPacienteGordura.textContent = gordura;
    addPacienteImc.textContent = calculaImc(peso, altura);
    
    addPacienteRow.appendChild(addPacienteName);
    addPacienteRow.appendChild(addPacientePeso);
    addPacienteRow.appendChild(addPacienteAltura);
    addPacienteRow.appendChild(addPacienteGordura);
    addPacienteRow.appendChild(addPacienteImc);

    table = document.querySelector('#tabela-pacientes');

    if (nome === '' || peso === '' || altura === ''|| gordura === '') {
        alert('Nenhum campo pode ser vazio!');
    } else {
        if (peso <= 0 || peso >= 300) {
            addPacientePeso.textContent = 'Peso inválido!';
            console.error(`O peso ${peso} é inválido. Será necessário atualizar.`)
            addPacienteRow.classList.add('campo-invalido');
        } if (altura >= 3 || altura <= 0) {
            addPacienteAltura.textContent = 'Altura inválida';
            console.error(`A altura ${altura} é inválida. Será necessário atualizar.`)
            addPacienteRow.classList.add('campo-invalido');
        }
        table.appendChild(addPacienteRow);
    }
})