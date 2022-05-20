let campo = document.querySelector('#filtrar-tabela');

campo.addEventListener('input', () => {
    console.log(campo.value)

    const pacientes = document.querySelectorAll('.paciente');

    if (campo.value.length > 0) {
        pacientes.forEach((paciente) => {
            const tdNome = paciente.querySelector('.info-nome');
            const nome = tdNome.textContent;
            const expressao = new RegExp(campo.value, 'i');
            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        })
    } else {
        pacientes.forEach((paciente) => {
            paciente.classList.remove('invisivel');
        })
    }

})