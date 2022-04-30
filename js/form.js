calculaImc = (peso, altura) => {
    imc = peso / (altura * altura);
    return Math.round(imc);
}

const addButton = document.querySelector('.bto-principal');
addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const paciente = obtemPacienteDoFormulario(form);
    const pacienteTr = montaTr(paciente);

    table = document.querySelector('#tabela-pacientes');

    // if (paciente.nome === '' || paciente.peso === '' || paciente.altura === ''|| paciente.gordura === '') {
    //     alert('Nenhum campo pode ser vazio!');
    // } else {
    //     if (paciente.peso <= 0 || paciente.peso >= 300) {
    //         pacienteTr.addPacientePeso.textContent = 'Peso inválido!';
    //         console.error(`O peso ${paciente.peso} é inválido. Será necessário atualizar.`)
    //         pacienteTr.addPacienteRow.classList.add('campo-invalido');
    //     } if (paciente.altura >= 3 || paciente.altura <= 0) {
    //         pacienteTr.addPacienteAltura.textContent = 'Altura inválida';
    //         console.error(`A altura ${paciente.altura} é inválida. Será necessário atualizar.`)
    //         pacienteTr.addPacienteRow.classList.add('campo-invalido');
    //     }
    //     table.appendChild(pacienteTr);
    // }

    table.appendChild(pacienteTr);
    form.reset();
})

function obtemPacienteDoFormulario(form) {

    const paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    const addPacienteRow = document.createElement('tr');
    addPacienteRow.classList.add('paciente');
    
    const addPacienteName = document.createElement('td');
    addPacienteName.classList.add('info-nome');

    const addPacienteAltura = document.createElement('td');
    addPacienteAltura.classList.add('info-altura');

    const addPacientePeso = document.createElement('td');
    addPacientePeso.classList.add('info-peso');

    const addPacienteGordura = document.createElement('td');
    addPacienteGordura.classList.add('info-gordura');

    const addPacienteImc = document.createElement('td')
    addPacienteImc.classList.add('info-imc');

    addPacienteName.textContent = paciente.nome;
    addPacienteAltura.textContent = paciente.altura;
    addPacientePeso.textContent = paciente.peso;
    addPacienteGordura.textContent = paciente.gordura;
    addPacienteImc.textContent = paciente.imc;
    
    addPacienteRow.appendChild(addPacienteName);
    addPacienteRow.appendChild(addPacientePeso);
    addPacienteRow.appendChild(addPacienteAltura);
    addPacienteRow.appendChild(addPacienteGordura);
    addPacienteRow.appendChild(addPacienteImc);

    return addPacienteRow;
}