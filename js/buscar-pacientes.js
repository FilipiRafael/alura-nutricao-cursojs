const botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            const response = xhr.responseText;
            const pacientes = JSON.parse(response);
            
            pacientes.forEach((paciente) => {
                montaPacienteNaTabela(paciente);
            })
        } else {
            console.error(`STATUS CODE: ${xhr.status}`)
            console.error(`RESPONSE TEXT: ${xhr.responseText}`)
        }
    });
})