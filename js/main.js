const buttonSubmit = document.querySelector('#buttonSubmit');

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    validar();

  


})

function validar(){
    const nome = document.querySelector('#titular');
    const numero = document.querySelector('#numero');
    const mes = document.querySelector('#mes');
    const ano = document.querySelector('#ano');

    if(nome.value === " "){

        exibirErro(nome.id);
        
    }


}

function exibirErro(id){
    const erro = document.querySelector(`#erro-${id}`);
}