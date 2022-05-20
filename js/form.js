calculaImc = (peso, altura) => {
    imc = peso / (altura * altura);
    return Math.round(imc);
}

const addButton = document.querySelector('.bto-principal');
addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const form = document.querySelector('#form-adiciona');
    const paciente = obtemPacienteDoFormulario(form);

    let errors = validaPaciente(paciente);

    if (errors.length > 0) {
        let errorList = document.querySelector('#lista-erros');
        errorList.innerHTML = '';
        errors.map((error) => {
            const addError = document.createElement('li');
            addError.classList.add('mensagem-erro');
            addError.textContent = error;
            errorList.appendChild(addError);
        })
        return;
    }

    montaPacienteNaTabela(paciente);
    
    form.reset();

    var mensagensErro = document.querySelector("#lista-erros");
    mensagensErro.innerHTML = ""
})

function montaPacienteNaTabela(paciente) {
    const pacienteTr = montaTr(paciente);
    table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacienteTr);
}

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

function validaPaciente(paciente) {
    // if (validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
    //     return ''
    // } else {
    //     if (!validaAltura(paciente.altura) && !validaPeso(paciente.peso)) {
    //         return 'Campos de peso e altura inválidos';
    //     } else if (!validaAltura(paciente.altura)) {
    //         return 'Altura inválida';
    //     } else if (!validaPeso(paciente.peso)) {
    //         return 'Peso inválido';
    //     }
    // }
    
    let errors = [];

    if (!validaPeso(paciente.peso)) errors.unshift('Peso inválido!');
    if (!validaAltura(paciente.altura)) errors.unshift('Altura inválida!');
    if (paciente.nome.length === 0) errors.unshift('Campo Nome não preenchido!')
    if (paciente.peso.length === 0) errors.unshift('Campo Peso não preenchido!')
    if (paciente.altura.length === 0) errors.unshift('Campo Altura não preenchido!')
    if (paciente.gordura.length === 0) errors.unshift('Campo Gordura não preenchido!')

    return errors;
} 

